// ProductsList.jsx
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useContext } from 'react';
import { FavoritesContext } from '../FavoritesContext/FavoritesContext';
import useFetch from '../../../hooks/useFetch'; // Update this path accordingly
import PropTypes from 'prop-types';
import './ProductsList.css';

function ProductsList({ selectedCategory }) {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const navigate = useNavigate();

    const productsUrl = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';
    const { data: products, isLoading, error } = useFetch(productsUrl);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!products) return <div>No products found</div>;

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