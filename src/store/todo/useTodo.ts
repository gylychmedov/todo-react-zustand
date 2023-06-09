import { create } from "zustand";
import { ITodoStore } from "../../interfaces/Store/ITodoStore";
import { EStatus } from "../../interfaces/Todo/ITodo";

export const useTodo = create<ITodoStore>((set) => ({
  todos: [
    {
      id: 1,
      title: "Prepare project",
      completed: false,
      status: EStatus.TODO,
      completion_date: "2023-05-05",
    },
    {
      id: 2,
      title: "Prepare project UI",
      completed: true,
      status: EStatus.DONE,
      completion_date: "2023-04-10",
    },
    {
      id: 3,
      title: "Learn Dockerfile",
      completed: false,
      status: EStatus.PENDING,
      completion_date: "2023-04-20",
    },
  ],

  addTodo: (title, completion_date) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title,
          status: EStatus.TODO,
          completed: false,
          completion_date,
        },
      ],
    })),
  toggleComplete: (todo_id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todo_id
          ? {
              ...todo,
              completed: !todo.completed,
              status: todo.completed ? EStatus.TODO : EStatus.DONE,
            }
          : todo
      ),
    })),
  changeStatus: (todo_id, status) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todo_id) {
          return { ...todo, status, completed: status === EStatus.DONE };
        }
        return todo;
      }),
    })),
}));
