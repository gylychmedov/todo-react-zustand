import { useState } from "react";
import { useTodo } from "../../store/todo/useTodo";
import { motion } from "framer-motion";

const AddTodo = () => {
  const { addTodo } = useTodo();

  const [newTodo, setNewTodo] = useState({
    title: "",
    completion_date: "",
  });

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) =>
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo.title, newTodo.completion_date);
    setNewTodo({ title: "", completion_date: "" });
  };

  return (
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
          placeholder="Title"
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
  );
};

export default AddTodo;
