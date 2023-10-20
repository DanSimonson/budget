import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
{products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}   
  fetchData()    
  const fetchData = async () => {
    let result = await axios.get("/api/categories");
    setCategories(result.data);
    result = await axios.get("/api/transactions");
    setTransactions(result.data);
  };    
  
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    
  }, []);
      
*/
