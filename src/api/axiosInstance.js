import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://649c002304807571923749f3.mockapi.io",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= REQUEST INTERCEPTOR ================= */

axiosInstance.interceptors.request.use(
  (config) => {
    // future auth token support
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* ================= RESPONSE INTERCEPTOR ================= */

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = "Something went wrong";

    if (error.response) {
      message =
        error.response.data?.message || `Error ${error.response.status}`;
    } else if (error.request) {
      message = "Network error. Check connection.";
    }

    return Promise.reject({
      message,
      status: error.response?.status,
    });
  },
);

export default axiosInstance;
