import React, { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { getUsers, deleteUser } from "../api/apiService";

const ITEMS_PER_PAGE = 5;

const Read = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { setToast } = useOutletContext();

  const fetchData = () => {
    setLoading(true);

    getUsers()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setToast({ message: err.message, type: "error" });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ---------- SEARCH ---------- */
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()),
  );

  /* ---------- PAGINATION ---------- */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  /* ---------- OPTIMISTIC DELETE ---------- */
  const handleDelete = (id) => {
    const oldData = data;

    setData(data.filter((item) => item.id !== id));

    deleteUser(id)
      .then(() => {
        setToast({
          message: "Deleted successfully",
          type: "success",
        });
      })
      .catch((err) => {
        setData(oldData);
        setToast({
          message: err.message,
          type: "error",
        });
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Read Data</h3>

        <NavLink to="/">
          <button className="primary-btn">Add New</button>
        </NavLink>
      </div>

      <input
        className="search-input"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {loading
              ? Array(5)
                  .fill()
                  .map((_, i) => (
                    <tr key={i}>
                      <td colSpan="5">
                        <div className="skeleton-row"></div>
                      </td>
                    </tr>
                  ))
              : currentData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>

                    <td>
                      <NavLink to="/update">
                        <button
                          className="btn-success"
                          onClick={() =>
                            setToLocalStorage(item.id, item.name, item.email)
                          }
                        >
                          Edit
                        </button>
                      </NavLink>
                    </td>

                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {!loading && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Read;
