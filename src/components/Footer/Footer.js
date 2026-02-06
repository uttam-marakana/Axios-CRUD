const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>AxiosCRUD</h3>
          <p>React CRUD Application using Axios.</p>
        </div>

        <div>
          <h4>Menu</h4>
          <p>Create</p>
          <p>Read</p>
          <p>Update</p>
        </div>

        <div>
          <h4>Address</h4>
          <p>Rajkot, Gujarat, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AxiosCRUD
      </div>
    </footer>
  );
};

export default Footer;
