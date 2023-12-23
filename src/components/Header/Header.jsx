import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/" className="headline">Products</Link>
                <Link to="/favorites" className="favorites-link">Favorites</Link>
            </div>
        </header>
    );
}

export default Header;
