import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let result = await axios.get("/api/categories");
    setCategories(result.data);
    result = await axios.get("/api/transactions");
    setTransactions(result.data);
  };
  //console.log("products: ", products);
  return (
    <div className="App">
      <h1>products</h1>
      {/* {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
