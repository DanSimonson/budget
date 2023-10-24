import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Budgets from "./pages/budgets/Budgets";
import Createbudget from "./pages/createBudget/Createbudget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budgets />} />
            <Route path="/createbudget" element={<Createbudget />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
