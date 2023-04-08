import { useTodo } from "../../store/todo/useTodo";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { motion } from "framer-motion";

const Categories = () => {
  const { todos, categories, toggleComplete } = useTodo();

  return (
    <section className="grid grid-cols-12 gap-y-5 lg:gap-10 mt-10">
      {categories.map((category) => (
        <aside className="col-span-12 lg:col-span-6">
          <header className="text-xl bg-indigo-700 px-5 py-3 rounded-t-lg">
            {category.name}
          </header>
          <aside className="bg-gray-800 rounded-b-lg">
            {todos
              .filter((todo) => todo.category_id === category.id)
              .map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => toggleComplete(todo.id)}
                  className={`${
                    todo.completed && " line-through"
                  } px-5 py-4 border-b cursor-pointer last:border-b-0 border-gray-700 flex-center-x space-x-3`}
                >
                  <span>
                    {todo.completed ? (
                      <MdRadioButtonChecked color="green" size={24} />
                    ) : (
                      <MdRadioButtonUnchecked color="gray" size={24} />
                    )}
                  </span>
                  <span>{todo.title}</span>
                </motion.div>
              ))}
          </aside>
        </aside>
      ))}
    </section>
  );
};

export default Categories;
