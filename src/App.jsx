import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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



// function Home() {
//   return <div>Welcome to the Home Page!</div>;
// }

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <div>
        <Link to="/">
          <Header />
        </Link>
        <Button categories={categories} onClick={setSelectedCategory} />

        <Routes>
          <Route path="/:category" element={<ProductsList selectedCategory={selectedCategory} />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
