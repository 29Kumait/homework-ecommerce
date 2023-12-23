// import { useNavigate } from 'react-router-dom';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { useContext } from 'react';
// import { FavoritesContext } from '../FavoritesContext/FavoritesContext';
// import './ProductItem.css'; 

// function ProductItem({ product }) {
//     const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
//     const navigate = useNavigate();

//     return (
//         <div className="product-item" onClick={() => navigate(`/product/${product.id}`)}>
//             <div className="product-item-image-wrapper">
//                 <img src={product.image} alt={product.title} className="product-item-image" />
//                 {favorites.includes(product.id) ? (
//                     <AiFillHeart size={30} className="product-item-icon" onClick={(e) => { e.stopPropagation(); removeFavorite(product.id); }} />
//                 ) : (
//                     <AiOutlineHeart size={30} className="product-item-icon" onClick={(e) => { e.stopPropagation(); addFavorite(product.id); }} />
//                 )}
//             </div>
//             <h3 className="product-item-title">{product.title}</h3>
//         </div>
//     );
// }

// export default ProductItem;
