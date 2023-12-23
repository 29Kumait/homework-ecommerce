// ProductsList.jsx
import PropTypes from 'prop-types';
import './ProductsList.css';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FavoritesContext } from '../FavoritesContext/FavoritesContext';

function ProductsList({ selectedCategory }) {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            setIsLoading(true);
            setError(null);
            try {
                let url = 'https://fakestoreapi.com/products';
                if (selectedCategory) {
                    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [selectedCategory]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="products-list">
            {products.map(product => (
                <div key={product.id} className="product-item" onClick={() => navigate(`/product/${product.id}`)}>
                    <div className="product-item-image-wrapper">
                        <img src={product.image} alt={product.title} className="product-item-image" />
                        {favorites.includes(product.id) ? (
                            <AiFillHeart size={30} className="product-item-icon" onClick={(e) => { e.stopPropagation(); removeFavorite(product.id); }} />
                        ) : (
                            <AiOutlineHeart size={30} className="product-item-icon" onClick={(e) => { e.stopPropagation(); addFavorite(product.id); }} />
                        )}
                    </div>
                    <h3 className="product-item-title">{product.title}</h3>
                </div>
            ))}
        </div>
    );
}

ProductsList.propTypes = {
    selectedCategory: PropTypes.string,
};

export default ProductsList;