import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CreateCategory from "./pages/createCategory/CreateCategory";
import ViewBudget from "./pages/viewBudget/ViewBudget";
import UpdateParent from "./pages/updateTransaction/UpdateParent";
import CreateTransaction from "./pages/createTransaction/CreateTransaction";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="viewbudget/:budgetid" element={<ViewBudget />} />
            <Route path="createtransaction" element={<CreateTransaction />} />
            <Route
              path="updatetransaction/:budgetid"
              element={<UpdateParent />}
            />
            <Route path="createcategory" element={<CreateCategory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
