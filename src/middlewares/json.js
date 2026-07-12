export async function json(request, response) {
    let pedacosDoBody = [];

    for await (const pedaco of request) {
        pedacosDoBody.push(pedaco)
    }

    try {
        request.body = JSON.parse(Buffer.concat(pedacosDoBody).toString());
    } catch {
        request.body = null;
    }
    response.setHeader("content-type", "application/json");
}