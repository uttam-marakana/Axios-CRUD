import Layout from "./layout/Layout";
import Create from "./crud_oper/Create";
import Read from "./crud_oper/Read";
import Update from "./crud_oper/Update";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
