// ProductsList.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductsList.css';

function ProductsList({ products }) {
    const navigate = useNavigate();

    return (
        <div>
            {products.map(product => (
                <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                </div>
            ))}
        </div>
    );
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired, // Updated to reflect actual props
};

export default ProductsList;