// App.jsx
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import './App.css';



function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data.map(category => ({ id: Math.random(), category })));
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <FavoritesProvider>
      <Router>
        <div>
          <Header />
          <Button categories={categories} onClick={setSelectedCategory} />

          <Routes>

            <Route path="/" element={<ProductsList />} />
            <Route path="/" element={<ProductsList />} />
            <Route
              path={`/category/:category`}
              element={<ProductsList selectedCategory={selectedCategory} />}
            />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />

          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;