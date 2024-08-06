import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children, open, setOpen }) {
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <section> {children}</section>
      <Footer />
    </>
  );
}

export default Layout;
