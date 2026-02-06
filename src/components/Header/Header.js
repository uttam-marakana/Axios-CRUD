import { useEffect, useState } from "react";
import { AiFillSun, AiOutlineMenu, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

const Header = ({ toggleSidebar }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <AiOutlineMenu />
        </button>

        <h2>Axios CRUD</h2>

        <button className="theme-toggle" onClick={changeTheme}>
          {theme === "light" ? <AiOutlineMoon /> : <AiFillSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
