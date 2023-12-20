import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Products</Link>
      </h1>
    </header>
  );
}

export default Header;

// Path: src/components/Header/Header.js
