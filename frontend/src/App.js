import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get("/api/products");
    setProducts(result.data);
  };
  console.log("products: ", products);
  return (
    <div className="App">
      <h1>products</h1>
      {/* {products.map((product) => (
        <div>
          <p>product.name</p>
          <p>product.price</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
