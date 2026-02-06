import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { updateUser } from "../api/apiService";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { setToast } = useOutletContext();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser(id, { name, email })
      .then(() => {
        setToast({
          message: "Updated successfully",
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
        <h3 className="page-title">Update Data</h3>

        <NavLink to="/read">
          <button className="primary-btn">Back</button>
        </NavLink>
      </div>

      <div className="card form-wrapper">
        <form onSubmit={handleUpdate}>
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
            <button className="primary-btn">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
