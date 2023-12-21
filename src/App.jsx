import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import './App.css';


function Home() {
  return <div></div>;
}

function App() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Fetch categories once on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data.map(category => ({ id: Math.random(), category })));
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Set error state, display message optionally
      }
    };

    fetchCategories();
  }, []); // Empty dependency array to ensure this runs only once

  // Fetch products whenever selectedCategory changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        setError(""); // Reset error message

        let url = 'https://fakestoreapi.com/products';
        if (selectedCategory) {
          url += `/category/${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products"); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Dependency on selectedCategory


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <Router>
        <div>
          <Header />
          <Button categories={categories} onClick={setSelectedCategory} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
                path={`/category/:category`}
                element={<ProductsList products={products} />}
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;