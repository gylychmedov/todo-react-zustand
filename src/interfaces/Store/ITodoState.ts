import { ICategory } from "../Todo/ICategory";
import { ITodo } from "../Todo/ITodo";

export interface ITodoState {
  categories: ICategory[];
  todos: ITodo[];
  addTodo: (title: string, category_id: number) => void;
  toggleComplete: (todo_id: number) => void;
}
