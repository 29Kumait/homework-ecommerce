import PropTypes from 'prop-types';
import products from '../../fake-data/all-products';
import './ProductsList.css';

function ProductsList({ selectedCategory }) {
    return (
        <div className="products-list">
            {products
                .filter(product => product.category === selectedCategory)
                .map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.title} />
                        <div className="product-item-title">{product.title}</div>
                        <div className="product-item-description">{product.description}</div>
                        {/* Other product details */}
                    </div>
                ))}
        </div>
    );
}


ProductsList.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
};

export default ProductsList;

// Path: src/components/ProductsList/ProductsList.jsx
