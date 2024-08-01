export type Todo = {
  id: string,
  description: string,
  status: number
}

let todos: Todo[] = [
  { id: "1", description: 'Learn TypeScript', status: 0 },
  { id: "2", description: 'Learn Node.js', status: 0 },
  { id: "3", description: 'Learn Express.js', status: 0 },
  { id: "4", description: 'Learn React.js', status: 0 },
  { id: "5", description: 'Learn Angular.js', status: 0 }
];


export const addTodo = (todo: Todo) => {
  todos.push(todo);
}

export const getTodos = () => {
  return todos;
}

export const getTodo = (id: string) => {
  return todos.find(todo => todo.id === id);
}

export const updateTodo = (id: string, todo: Todo) => {
  const index = todos.findIndex(todo => todo.id === id);
  todos[index] = { id, ...todo };
}

export const deleteTodo = (id: string) => {
  const index = todos.findIndex(todo => todo.id === id);
  todos.splice(index, 1);
}
