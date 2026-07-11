import { createTask, listTasks, updateTask, deleteTask } from "./funcoes.js";

listTasks();

createTask("Estudar JavaScript", "Fazer o CRUD funcionar");
createTask("Estudar Node.js", "Verificar se a lista de tarefas está sendo gerada");

listTasks();

// Testando a atualização:
updateTask(1, { status: "CONCLUÍDO!", descricao: "Já fiz essa parte" });
console.log("--- Lista Após a Atualização ---");
listTasks();

// Testando a exclusão:
deleteTask(2);
console.log("--- Lista Após a Exclusão ---");
listTasks();