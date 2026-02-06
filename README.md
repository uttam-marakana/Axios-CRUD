# 📘 Axios CRUD React Application

A simple **CRUD (Create, Read, Update, Delete)** application built using **React.js** and **Axios**.
This project demonstrates how to perform API operations, manage component state, and navigate between pages using **React Router**.

The application allows users to create records, view stored data, update entries, and delete records through a REST API.

---

## 🚀 Features

* ✅ Create new records
* ✅ Read and display API data
* ✅ Update existing records
* ✅ Delete records
* ✅ Axios-based API communication
* ✅ React Router navigation
* ✅ Component-based architecture

---

## 🛠️ Tech Stack

* React.js
* Axios
* React Router DOM
* JavaScript (ES6+)
* HTML5 & CSS3
* Yarn Package Manager

---

## 📁 Project Structure

```
src/
│
├── crud_oper/
│   ├── Create.js
│   ├── Read.js
│   └── Update.js
│
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/uttam-marakana/Axios-CRUD.git
```

### 2️⃣ Navigate into the project folder

```bash
cd Axios-CRUD
```

### 3️⃣ Install dependencies

```bash
yarn install
```

### 4️⃣ Start the development server

```bash
yarn start
```

The application will run on:

```
http://localhost:3000
```

---

## 🔌 API Usage

Axios is used to perform HTTP requests.

Example:

```javascript
axios.post("API_URL", {
  name: name,
  email: email
});
```

You can connect this project to:

* MockAPI
* JSON Server
* Node.js / Express backend
* Any REST API

---

## 🔄 Application Flow

1. User submits data from the **Create** page
2. Axios sends a POST request to the API
3. User is redirected to the Read page
4. Data is fetched and displayed
5. Records can be updated or deleted

---

## 📌 Future Improvements

* Form validation
* Loading and error handling
* API service layer abstraction
* Pagination
* UI improvements
* Authentication support

---

## 👨‍💻 Author

**Uttam Marakana**
React Developer | Shopify Developer

---

## 📄 License

This project is open-source and available for learning purposes.

---

