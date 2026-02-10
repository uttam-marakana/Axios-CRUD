import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <AiOutlineMenu />
        </button>

        <h2 className="header-title">Axios CRUD</h2>

        <div className="header-spacer"></div>
      </div>
    </header>
  );
};

export default Header;
