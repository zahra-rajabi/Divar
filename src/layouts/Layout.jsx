import React from "react";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <section> {children}</section>
      <Footer />
    </>
  );
}

export default Layout;
