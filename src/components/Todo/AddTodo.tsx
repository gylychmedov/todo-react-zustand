import { useState } from "react";
import { useTodo } from "../../store/todo/useTodo";
import { AnimatePresence, motion } from "framer-motion";
import { IAddTodoProps } from "../../interfaces/Todo/IAddTodoProps";
import { toast } from "react-hot-toast";

const initialNewTodo = { title: "", completion_date: "" };

const AddTodo: React.FC<IAddTodoProps> = ({ isOpen }) => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState(initialNewTodo);

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) =>
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo.title, newTodo.completion_date);
    setNewTodo(initialNewTodo);
    toast.success("Task added");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          initial={{ height: 0, opacity: 0 }}
        >
          <form
            onChange={handleChangeForm}
            onSubmit={handleSubmit}
            className="flex-center-x space-x-3 mt-4"
          >
            <input
              name="title"
              className="input-white w-full"
              type="text"
              value={newTodo.title}
              placeholder="Task"
              required
            />
            <input
              required
              value={newTodo.completion_date}
              type="date"
              className="input-white"
              name="completion_date"
            />

            <button className="button-black">Add</button>
          </form>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AddTodo;
