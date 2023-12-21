import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ProductsList from "./components/ProductsList/ProductsList";
import './App.css';

const categories = [
  { id: 1, category: "electronics" },
  { id: 2, category: "jewelery" },
  { id: 3, category: "men's clothing" },
  { id: 4, category: "women's clothing" },
];

function Home() {
  return <div></div>;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);

  return (
    <Router>
      <div>
        <Header /> {/* Correct usage: Header is not inside another Link */}

        <Button categories={categories} onClick={setSelectedCategory} />

        <Routes>
          {categories.map((category) => (
            <Route
              key={category.id}
              path={`/category/${category.category}`}
              element={<ProductsList selectedCategory={category.category} />}
            />
          ))}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
