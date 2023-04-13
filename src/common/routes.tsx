import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../pages/todo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
]);

export default routes;
