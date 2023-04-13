import React from "react";
import { ILayout } from "../../interfaces/Elements/ILayout";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className="w-screen min-h-screen bg-gray-100 bg-opacity-50">
      <section className="px-4 lg:px-8 py-4 container mx-auto">
        {children}
      </section>
    </main>
  );
};

export default Layout;
