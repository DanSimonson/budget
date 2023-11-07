import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ViewBudget from "./pages/viewBudget/ViewBudget";
import CreateCategory from "./pages/createCategory/CreateCategory";
import UpdateCategory from "./pages/updateCategory/UpdateCategoryParent";
import UpdateTransaction from "./pages/updateTransaction/UpdateParent";
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
              element={<UpdateTransaction />}
            />
            <Route path="createcategory" element={<CreateCategory />} />
            <Route
              path="updatecategory/:budgetid"
              element={<UpdateCategory />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
