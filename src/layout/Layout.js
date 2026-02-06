import { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Toast from "../components/Toast/Toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [toast, setToast] = useState(null);

  return (
    <div className="app-layout">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="main-wrapper">
        <Sidebar
          sidebarOpen={sidebarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <main className="content">
          <Outlet context={{ setToast }} />
        </main>
      </div>

      <Footer />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Layout;
