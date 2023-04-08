import { create } from "zustand";
import { ITodoState } from "../../interfaces/Store/ITodoState";

export const useTodo = create<ITodoState>((set) => ({
  categories: [
    {
      id: 1,
      name: "Project",
    },
    {
      id: 2,
      name: "Personal",
    },
  ],

  todos: [
    {
      id: 1,
      title: "Prepare project",
      completed: false,
      category_id: 1,
    },
    {
      id: 2,
      title: "Prepare project UI",
      completed: true,
      category_id: 1,
    },
    {
      id: 3,
      title: "Learn Dockerfile",
      completed: false,
      category_id: 2,
    },
  ],

  addTodo: (title, category_id) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, title, category_id, completed: false },
      ],
    })),
  toggleComplete: (todo_id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == todo_id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
