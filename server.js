import http from 'http';
import { db } from "./banco.js";
import { createTask, listTasks, updateTask, deleteTask } from "./funcoes.js";

createTask("Estudar JavaScript", "Fazer o CRUD funcionar");
createTask("Estudar Node.js", "Verificar se a lista de tarefas está sendo gerada");
createTask("Estudar HTTP", "Entender como o JSON trafega na rede");

const server = http.createServer((request, response) => {
    const url = request.url;
    const metodo = request.method;

    if (metodo === 'GET' && url === '/tasks') {
        response.writeHead(200, { "content-type": "application/json"});
        const tarefasEmTexto = JSON.stringify(db.tarefas);
        response.end(tarefasEmTexto);

    } else if (metodo === 'POST' && url === '/tasks') {
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

    } else {
        response.writeHead(404, { "content-type": "text/plain" })
        response.end("Erro 404: Rota não encontrada");
    }

});

server.listen(3000, () => {
    console.log("Servidor rodando! Acesse: http://localhost:3000/tasks no seu navegador.");
});