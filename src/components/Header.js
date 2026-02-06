import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">AxiosCRUD</div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <Link to="/">Create</Link>
          <Link to="/read">Read</Link>
          <Link to="/update">Update</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
