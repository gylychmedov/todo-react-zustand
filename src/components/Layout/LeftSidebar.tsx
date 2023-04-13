import { MdTaskAlt } from "react-icons/md";
import { RiReactjsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <aside className="flex flex-col text-black bg-white h-screen fixed top-0 left-0 bottom-0 w-86">
      <h1 className="px-3 py-6 justify-center rounded-b-3xl text-3xl flex items-center space-x-3 font-nunito_bold">
        <RiReactjsFill />
        <span>Zustand</span>
      </h1>

      <nav className="mt-10 text-lg px-5">
        <NavLink
          to="/"
          className="icon-text hover:bg-gray-100 py-2 px-3 rounded-md"
        >
          <MdTaskAlt />
          <span>Tasks</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
