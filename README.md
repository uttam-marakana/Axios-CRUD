Axios CRUD React Application

A simple CRUD (Create, Read, Update, Delete) application built using React.js and Axios.
This project demonstrates how to perform API operations, manage state, and navigate between pages using React Router.

The application allows users to create records, view stored data, update entries, and delete records through a REST API.

🚀 Features

✅ Create new records

✅ Read and display API data

✅ Update existing records

✅ Delete records

✅ Axios-based API communication

✅ React Router navigation

✅ Component-based structure

🛠️ Tech Stack

React.js

Axios

React Router DOM

JavaScript (ES6+)

HTML5 & CSS3

Yarn Package Manager

📁 Project Structure
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

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/axios-crud.git

2️⃣ Navigate into the project folder
cd axios-crud

3️⃣ Install dependencies
yarn install

4️⃣ Start the development server
yarn start


The application will run on:

http://localhost:3000

🔌 API Usage

Axios is used to perform HTTP requests.

Example:

axios.post("API_URL", {
  name: name,
  email: email
});


You can connect this project to:

MockAPI

JSON Server

Node.js / Express backend

Any REST API

🔄 Application Flow

User submits data from the Create page

Axios sends POST request to API

User is redirected to the Read page

Data is fetched and displayed

Records can be edited or deleted

📌 Future Improvements

Form validation

Loading & error states

API service layer

Pagination

UI improvements

Authentication support

👨‍💻 Author

Uttam Marakana
React Developer | Shopify Developer

📄 License

This project is open-source and available for learning purposes