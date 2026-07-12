import { buildRoutePath } from './utils/build-route-path.js';
import { db } from './database.js';
import { createTask, updateTask, deleteTask } from './funcoes.js';

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (request, response) => {
            const { titulo, descricao } = request.body;
            createTask(titulo, descricao);
            return response.writeHead(201).end(JSON.stringify("Tarefa criada!"));
        }
    },
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (request, response) => {
            const pesquisa = request.query.search;
            let tarefasFiltradas = db.tarefas;
            
            if (pesquisa) {
                tarefasFiltradas = db.tarefas.filter(tarefa => {
                    return tarefa.titulo.toLowerCase().includes(pesquisa.toLowerCase()) || 
                           tarefa.descricao.toLowerCase().includes(pesquisa.toLowerCase());
                });
            }
            return response.writeHead(200).end(JSON.stringify(tarefasFiltradas));
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (request, response) => {
            const id = Number(request.params.id);
            const sucesso = deleteTask(id);
            if (sucesso) return response.writeHead(200).end(JSON.stringify("Deletado com sucesso!"));
            return response.writeHead(404).end(JSON.stringify("Não encontrado"));
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (request, response) => {
            const id = Number(request.params.id);
            const sucesso = updateTask(id, request.body);
            if (sucesso) return response.writeHead(200).end(JSON.stringify("Atualizado via PUT!"));
            return response.writeHead(404).end(JSON.stringify("Não encontrado"));
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (request, response) => {
            const id = Number(request.params.id);
            const sucesso = updateTask(id, { status: "CONCLUÍDO!" });
            if (sucesso) return response.writeHead(200).end(JSON.stringify("Concluído via PATCH!"));
            return response.writeHead(404).end(JSON.stringify("Não encontrado"));
        }
    }
];
