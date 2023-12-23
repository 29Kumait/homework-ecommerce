import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import useFetch from './../hooks/useFetch'; // Make sure to use the correct path
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: categories, isLoading, error } = useFetch('https://fakestoreapi.com/products/categories');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <FavoritesProvider>
      <Router>
        <div>
          <Header />
          {categories &&
            <Button categories={categories.map(category => ({ id: Math.random(), category }))} onClick={setSelectedCategory} />
          }
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/category/:category" element={<ProductsList selectedCategory={selectedCategory} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
