import { useTodo } from "../../store/todo/useTodo";
import { motion } from "framer-motion";
import { ITodosProps } from "../../interfaces/Todo/ITodosProps";
import slideVariants from "../../common/animation/SlideVariants";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import statusClass from "../../common/data/statusClass";

const Todos: React.FC<ITodosProps> = ({ activeTab }) => {
  const { todos, toggleComplete } = useTodo();
  return (
    <aside className="flex flex-col space-y-4 mt-4">
      {todos
        .filter((todo) => activeTab.value.includes(todo.status))
        .map((todo) => (
          <motion.div
            key={todo.id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            layoutId={todo.id + ""}
            className={`px-5 py-4 bg-white shadow-xl shadow-gray-100 rounded-md cursor-pointer flex justify-between items-center`}
          >
            <div className="flex-center-x space-x-3">
              <span
                onClick={() => toggleComplete(todo.id)}
                className=" hover:scale-105 duration-300"
              >
                {todo.completed ? (
                  <ImCheckboxChecked color="green" size={20} />
                ) : (
                  <ImCheckboxUnchecked color="gray" size={20} />
                )}
              </span>
              <div className="flex flex-col">
                <span className={`${todo.completed && " line-through"} `}>
                  {todo.title}
                </span>
                <span className="text-gray-400 text-sm mt-1">
                  Completion date: {todo.completion_date}{" "}
                </span>
              </div>
            </div>
            <div
              className={`${
                statusClass[todo.status]
              } px-3 py-1 rounded-md flex-center-x space-x-2`}
            >
              {todo.status}
            </div>
          </motion.div>
        ))}
    </aside>
  );
};

export default Todos;
