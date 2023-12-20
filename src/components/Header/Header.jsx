import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header onClick={handleClick}>
      <h1>Products</h1>
    </header>
  );
}

export default Header;