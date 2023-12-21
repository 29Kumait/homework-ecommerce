import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <Link to="/">Products</Link>
        </header>
    );
}

export default Header;