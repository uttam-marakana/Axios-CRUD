const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        <h2>Axios CRUD App</h2>
      </div>
    </header>
  );
};

export default Header;
