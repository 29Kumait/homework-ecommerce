// ProductsList.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductsList.css';

function ProductsList({ products }) {
    const navigate = useNavigate();

    return (
        <div className="products-list">
            {products.map(product => (
                <div key={product.id} className="product-item" onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt={product.title} className="product-item-image"/>
                    <h3 className="product-item-title">{product.title}</h3>
                    {/* <p className="product-item-description">{product.description}</p> */}
                </div>
            ))}
        </div>
    );
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductsList;
