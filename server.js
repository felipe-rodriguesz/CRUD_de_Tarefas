import http from 'http';
import { db } from "./banco.js";
import { createTask, listTasks, updateTask, deleteTask } from "./funcoes.js";

createTask("Estudar JavaScript", "Fazer o CRUD funcionar");
createTask("Estudar Node.js", "Verificar se a lista de tarefas está sendo gerada");
createTask("Estudar HTTP", "Entender como o JSON trafega na rede");

const regexID = /^\/tasks\/(?<id>[0-9]+)/;

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const caminho = url.pathname;
    const metodo = request.method;
    const urlID = caminho.match(regexID);

    let idTarefa = null;
    if (urlID) {
        idTarefa = Number(urlID.groups.id);
    }

    if (metodo === 'GET' && caminho === '/tasks') {
        const pesquisa = url.searchParams.get('search');

        let tarefasFiltradas = db.tarefas;
        
        if (pesquisa){
            tarefasFiltradas = db.tarefas.filter(tarefa => {
                const tituloMinusculo = tarefa.titulo.toLowerCase();
                const descricaoMinuscula = tarefa.descricao.toLowerCase();
                const pesquisaMinuscula = pesquisa.toLowerCase();

                return tituloMinusculo.includes(pesquisaMinuscula) || descricaoMinuscula.includes(pesquisaMinuscula);
            });
        }

        response.writeHead(200, { "content-type": "application/json"});
        const tarefasEmTexto = JSON.stringify(tarefasFiltradas);
        response.end(tarefasEmTexto);

    } else if (metodo === 'POST' && caminho === '/tasks') {
        let pedacosDoBody = [];

        request.on('data', (pedaco) => {
            pedacosDoBody.push(pedaco);
        });

        request.on('end', () => {
            const bodyEmTexto = Buffer.concat(pedacosDoBody).toString();
            const objetoRecebido = JSON.parse(bodyEmTexto);

            createTask(objetoRecebido.titulo, objetoRecebido.descricao);

            response.writeHead(201, { "content-type": "text/plain"});
            response.end("Tarefa criada com sucesso via POST!");
        });

    } else if (metodo === 'DELETE' && idTarefa !== null) {
        deleteTask(idTarefa);
        response.writeHead(200, { "content-type": "text/plain" });
        response.end("Tarefa deletada com sucesso via DELETE!");
        
    } else if (metodo === 'PATCH' && idTarefa !== null && caminho.includes('/complete')) {
        updateTask(idTarefa, {status: "CONCLUÍDO!"})
        response.writeHead(200, { "content-type": "text/plain" })
        response.end("Tarefa marcada como concluída via PATCH!");

    } else if (metodo === 'PUT' && idTarefa !== null) {
        let pedacosDoBody = [];
        
        request.on('data', (pedaco) => {
            pedacosDoBody.push(pedaco);
        });

        request.on('end', () => {
            const bodyEmTexto = Buffer.concat(pedacosDoBody).toString();
            const objetoRecebido = JSON.parse(bodyEmTexto);

            updateTask(idTarefa, objetoRecebido);

            response.writeHead(200, { "content-type": "text/plain" });
            response.end("Tarefa atualizada com sucesso via PUT!");
        });
        
    } else {
        response.writeHead(404, { "content-type": "text/plain" })
        response.end("Erro 404: Rota não encontrada");
    }

});

server.listen(3000, () => {
    console.log("Servidor rodando! Acesse: http://localhost:3000/tasks no seu navegador.");
});