/*
Usamos 'const' quando não queremos que o valor seja alterado, com objetos usamos
para alterar apenas uma das propriedades, com array usamos para incluir ou remover objetos.
Mas, não podemos sobrescrever o objeto ou array inteiro.
*/

/*
Usamos 'let' quando a variável vai precisar apontar para algo completamente novo no futuro.
Por exemplo, quando queremos deletar um objeto inteiro de um array e depois precisamos
recriar o array sem o objeto deletado.
*/

//Exemplo de Objeto
const tarefa = {
    id: 1,
    titulo: "Estudar JavaScript",
    concluida: false
};

//Exemplo de Array de Objetos
const listaDeTarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: false},
    { id: 2, titulo: "Ir para a academia", concluida: false},
    { id: 3, titulo: "Ler um livro", concluida: true}
];

//Exemplo de Função que recebe um objeto
function exibirTitulo(tarefa) {
    console.log("O título é:", tarefa.titulo);
}

//Chamando a função com um objeto e exibindo na tela
const minhaTarefa = {id: 1, titulo: "Comprar pão"};
exibirTitulo(minhaTarefa);

//Push adiciona um item no final da lista
const numeros = [1, 2];
console.log(numeros);
numeros.push(3);
console.log(numeros);

//Find para buscar um item na lista
const busca = listaDeTarefas.find(tarefa => tarefa.id === 2);
console.log(busca);

//Filter para filtrar itens na lista
const concluida = listaDeTarefas.filter(tarefa => tarefa.concluida === true);
console.log(concluida);

//Map pega apenas uma informação de cada objeto dentro da lista
const titulos = listaDeTarefas.map(tarefa => tarefa.titulo);
console.log(titulos);