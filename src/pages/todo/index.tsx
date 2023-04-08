import React from "react";
import Layout from "../../components/Layout/Layout";
import Categories from "../../components/Todo/Categories";
import AddTodo from "../../components/Todo/AddTodo";

const TodoPage = () => {
  return (
    <Layout>
      <section>
        <header className="font-nunito_bold text-3xl w-full text-center mt-4">
          Todo
        </header>
        <AddTodo />
        <Categories />
      </section>
    </Layout>
  );
};

export default TodoPage;
