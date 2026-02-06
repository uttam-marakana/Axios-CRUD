import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, collapsed, setCollapsed, closeSidebar }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <aside
        className={`sidebar 
        ${sidebarOpen ? "open" : ""} 
        ${collapsed ? "collapsed" : ""}`}
      >
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "➜" : "⬅"}
        </button>

        <NavLink to="/" onClick={closeSidebar}>
          Create
        </NavLink>

        <NavLink to="/read" onClick={closeSidebar}>
          Read
        </NavLink>

        <NavLink to="/update" onClick={closeSidebar}>
          Update
        </NavLink>
      </aside>
    </>
  );
};

export default Sidebar;
