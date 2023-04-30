import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { ITab } from "../../interfaces/Tab/ITab";
import tabs from "../../common/data/tabs";
import Tabs from "../../components/Todo/Tabs";
import Todos from "../../components/Todo/Todos";
import AddTodo from "../../components/Todo/AddTodo";
import { Toaster } from "react-hot-toast";
import { RiUser6Fill } from "react-icons/ri";
import { useUser } from "../../store/user/useUser";

const TodoPage = () => {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const [addTodoIsOpen, setAddTodoIsOpen] = useState(false);
  const handleTab = (tab: ITab) => setActiveTab(tab);
  const handleAddTodoToggle = () => setAddTodoIsOpen(!addTodoIsOpen);
  const { user, isSigned, signInWithGoogle } = useUser();
  return (
    <Layout>
      <section>
        <nav className="flex justify-between items-center">
          <header className="font-nunito_bold text-3xl w-full  mt-6">
            Tasks
          </header>
          <div
            onClick={() => signInWithGoogle()}
            className="hover:bg-white w-10 h-10 flex-center rounded-md hover:shadow-xl duration-300 cursor-pointer shadow-gray-200"
          >
            {isSigned ? (
              user.user.photoURL ? (
                <img
                  src={user.user.photoURL}
                  className="rounded-md shadow-xl shadow-gray-100"
                />
              ) : (
                user.user.displayName?.split(" ")[0]
              )
            ) : (
              <RiUser6Fill size={24} />
            )}
          </div>
        </nav>
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
