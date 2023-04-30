import { EStatus, ITodo } from "../Todo/ITodo";

export interface ITodoStore {
  todos: ITodo[];
  addTodo: (title: string, completion_date: string) => void;
  toggleComplete: (todo_id: number) => void;
  changeStatus: (todo_id: number, status: EStatus) => void;
}
