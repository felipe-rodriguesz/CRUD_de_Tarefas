import http from 'http';

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.end("Meu primeiro servidor Node.js!");
});

server.listen(3000, () => {
    console.log("Servidor rodando! Acesse: http://localhost:3000 no seu navegador.");
});