import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children, show, setShow }) {
  return (
    <>
      <Header show={show} setShow={setShow} />
      <section> {children}</section>
      <Footer />
    </>
  );
}

export default Layout;
