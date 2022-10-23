// components/layout.js
// import Navbar from "./navbar";
// import Footer from "./footer";
import type { ReactNode, FC } from "react";
import Footer from "../UI/footer";

// import custom components
import Header from "../UI/header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-[90vh]  flex flex-column items-center justify-center ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
