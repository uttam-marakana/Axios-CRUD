import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="container" style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
