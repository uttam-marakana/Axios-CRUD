import React, { useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { createUser } from "../api/apiService";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { setToast } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser({ name, email })
      .then(() => {
        setToast({
          message: "Data created successfully",
          type: "success",
        });
        navigate("/read");
      })
      .catch((err) => {
        setToast({
          message: err.message,
          type: "error",
        });
      });
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Create Data</h3>

        <NavLink to="/read">
          <button className="primary-btn">Show Data</button>
        </NavLink>
      </div>

      <div className="card form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button className="primary-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
