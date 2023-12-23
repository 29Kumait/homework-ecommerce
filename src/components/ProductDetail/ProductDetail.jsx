import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './ProductDetail.css';
import { FavoritesContext } from "../FavoritesContext/FavoritesContext"

function ProductDetail() {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        async function fetchProduct() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [id]);



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;
    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            {favorites.includes(product.id) ? (
                <AiFillHeart size={40} onClick={() => removeFavorite(product.id)} />
            ) : (
                <AiOutlineHeart size={40} onClick={() => addFavorite(product.id)} />
            )}
        </div>
    );
}

export default ProductDetail;