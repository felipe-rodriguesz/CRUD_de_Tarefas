import http from 'http';
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

const server = http.createServer(async (request, response) => {
    await json(request, response);
    const url = new URL(request.url, `http://${request.headers.host}`);
    const caminho = url.pathname;
    const metodo = request.method;
    const route = routes.find(route => route.method === metodo && route.path.test(caminho));

    if (route) {
        const routeParams = caminho.match(route.path);
        request.params = routeParams ? routeParams.groups : {};
        request.query = Object.fromEntries(url.searchParams.entries());

        return route.handler(request, response);
    }
    response.writeHead(404)
    response.end(JSON.stringify("Erro 404: Rota não encontrada"));
});

server.listen(3000, () => {
    console.log("Servidor rodando! Acesse: http://localhost:3000/tasks no seu navegador.");
});