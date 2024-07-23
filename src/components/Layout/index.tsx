import React, { FC } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
