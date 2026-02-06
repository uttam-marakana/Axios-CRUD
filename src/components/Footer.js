import React from "react";

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
          <ul>
            <li>Create</li>
            <li>Read</li>
            <li>Update</li>
          </ul>
        </div>

        <div>
          <h4>Address</h4>
          <p>
            Rajkot, Gujarat <br />
            India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AxiosCRUD
      </div>
    </footer>
  );
};

export default Footer;
