import { motion } from "framer-motion";
import slideVariants from "../../common/animation/SlideVariants";
import { useTodo } from "../../store/todo/useTodo";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import statusClass from "../../common/data/statusClass";
import { ITodoProps } from "../../interfaces/Todo/ITodoProps";
import { EStatus } from "../../interfaces/Todo/ITodo";
import { toast } from "react-hot-toast";
import { statusList } from "../../common/data/statusList";

const Todo: React.FC<ITodoProps> = ({ todo }) => {
  const { toggleComplete, changeStatus } = useTodo();

  return (
    <motion.div
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
      <select
        onChange={(e) => {
          changeStatus(todo.id, e.target.value as EStatus);
          toast.success("Task status changed");
        }}
        className={`${
          statusClass[todo.status]
        } px-4 py-1 rounded-md appearance-none outline-none`}
      >
        {statusList.map((status) => (
          <option value={status} selected={status == todo.status}>
            {status}
          </option>
        ))}
      </select>
    </motion.div>
  );
};

export default Todo;
