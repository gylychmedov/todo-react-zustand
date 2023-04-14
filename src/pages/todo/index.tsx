import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { ITab } from "../../interfaces/Tab/ITab";
import tabs from "../../common/data/tabs";
import Tabs from "../../components/Todo/Tabs";
import Todos from "../../components/Todo/Todos";
import AddTodo from "../../components/Todo/AddTodo";
import { Toaster } from "react-hot-toast";

const TodoPage = () => {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const [addTodoIsOpen, setAddTodoIsOpen] = useState(false);
  const handleTab = (tab: ITab) => setActiveTab(tab);
  const handleAddTodoToggle = () => setAddTodoIsOpen(!addTodoIsOpen);
  return (
    <Layout>
      <section>
        <header className="font-nunito_bold text-3xl w-full  mt-6">
          Tasks
        </header>
        <section className="mt-10">
          <Tabs
            activeTab={activeTab}
            handleTab={handleTab}
            addTodoToggle={handleAddTodoToggle}
          />
          <AddTodo isOpen={addTodoIsOpen} />
          <Todos activeTab={activeTab} />
        </section>
      </section>
      <Toaster />
    </Layout>
  );
};

export default TodoPage;
