import { NavLink } from "react-router-dom";
import { FaPlus, FaList, FaEdit } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";


const Sidebar = ({ sidebarOpen, collapsed, setCollapsed, closeSidebar }) => {
  const menuItems = [
    { name: "Create", path: "/", icon: <FaPlus /> },
    { name: "Read", path: "/read", icon: <FaList /> }
  ];

  return (
    <>
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
          {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={closeSidebar}
            className="menu-item"
          >
            <span className="menu-icon">{item.icon}</span>

            {!collapsed && <span className="menu-text">{item.name}</span>}
          </NavLink>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
