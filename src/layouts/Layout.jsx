import React from "react";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-screen"> {children}</div>
      <Footer />
    </>
  );
}

export default Layout;
