import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <Link to="/" className="headline">Products</Link>
            <Link to="/favorites" className="favorites-link">Favorites</Link>
        </header>
    );
}

export default Header;
