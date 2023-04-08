import React from "react";
import { ILayout } from "../../interfaces/Elements/ILayout";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className=" bg-gray-900 text-white w-screen min-h-screen">
      <section className="px-4 lg:px-8 py-4">{children}</section>
    </main>
  );
};

export default Layout;
