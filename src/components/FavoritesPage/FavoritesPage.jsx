// FavoritesPage.jsx
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../FavoritesContext/FavoritesContext';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const FavoritesPage = () => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchFavoriteProducts = async () => {
            setIsLoading(true);
            try {
                const products = await Promise.all(
                    favorites.map(id =>
                        fetch(`https://fakestoreapi.com/products/${id}`)
                            .then(response => response.json())
                    )
                );
                setFavoriteProducts(products);
            } catch (error) {
                console.error('Error fetching favorite products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (favorites.length > 0) {
            fetchFavoriteProducts();
        }
    }, [favorites]);

    if (isLoading) return <div>Loading...</div>;
    if (favoriteProducts.length === 0) return <div>No favorites yet</div>;
    return (
        <div>
            {favoriteProducts.map((product) => (
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
};

export default FavoritesPage;