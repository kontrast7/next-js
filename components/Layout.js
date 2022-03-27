import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer text={"Footer"} />
    </>
  );
};

export default Layout;
