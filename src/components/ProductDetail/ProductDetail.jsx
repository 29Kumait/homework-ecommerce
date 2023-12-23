import { useContext } from "react"
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './ProductDetail.css';
import { FavoritesContext } from "../FavoritesContext/FavoritesContext"
import useFetch from "../../../hooks/useFetch"
function ProductDetail() {
    let { id } = useParams();
    const { data: product, isLoading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

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