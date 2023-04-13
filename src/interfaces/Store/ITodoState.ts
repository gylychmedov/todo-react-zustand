import { ITodo } from "../Todo/ITodo";

export interface ITodoState {
  todos: ITodo[];
  addTodo: (title: string, completion_date: string) => void;
  toggleComplete: (todo_id: number) => void;
}
