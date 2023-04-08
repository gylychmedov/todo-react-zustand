import { useState } from "react";
import { useTodo } from "../../store/todo/useTodo";

const AddTodo = () => {
  const { addTodo, categories } = useTodo();

  const [newTodo, setNewTodo] = useState({
    title: "",
    category_id: "1",
  });

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) =>
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo.title, Number(newTodo.category_id));
    setNewTodo({ title: "", category_id: "1" });
  };

  return (
    <section className="flex flex-col mt-4">
      <form
        onChange={handleChangeForm}
        onSubmit={handleSubmit}
        className="flex-center space-x-3"
      >
        <input
          name="title"
          className="input-gray w-96"
          type="text"
          value={newTodo.title}
          placeholder="Title"
          required
        />
        <select name="category_id" className="input-gray appearance-none pr-10">
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              selected={category.id == Number(newTodo.category_id)}
            >
              {category.name}
            </option>
          ))}
        </select>
        <button className="button-gray">Add</button>
      </form>
    </section>
  );
};

export default AddTodo;
