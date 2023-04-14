import { useTodo } from "../../store/todo/useTodo";
import { ITodosProps } from "../../interfaces/Todo/ITodosProps";
import Todo from "./Todo";

const Todos: React.FC<ITodosProps> = ({ activeTab }) => {
  const { todos } = useTodo();
  return (
    <aside className="flex flex-col space-y-4 mt-4">
      {todos
        .filter((todo) => activeTab.value.includes(todo.status))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </aside>
  );
};

export default Todos;
