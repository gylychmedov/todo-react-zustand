import { HiPlusSm } from "react-icons/hi";
import tabs from "../../common/data/tabs";
import { ITabsProps } from "../../interfaces/Tab/ITabsProps";
import { AnimatePresence, motion } from "framer-motion";

const Tabs: React.FC<ITabsProps> = ({
  activeTab,
  handleTab,
  addTodoToggle,
}) => {
  return (
    <aside className="w-full flex justify-between items-center">
      <div className="flex-center-x space-x-2 xl:space-x-7">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => handleTab(tab)}
            className={`p-3 hover:border-gray-300 cursor-pointer border-b-2 border-transparent relative`}
          >
            <AnimatePresence>
              {tab.name === activeTab.name && (
                <motion.div
                  layoutId="tab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                ></motion.div>
              )}
            </AnimatePresence>
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <button
        onClick={addTodoToggle}
        className="button-black px-2 xl:px-4 icon-text"
      >
        <HiPlusSm size={18} />
        <span className="hidden md:block duration-200">New task</span>
      </button>
    </aside>
  );
};

export default Tabs;
