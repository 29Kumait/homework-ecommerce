
import "./ProductsList.css";

import PropTypes from 'prop-types';
import products from "../../fake-data/all-products";

function ProductsList({ selectedCategory }) {
  return (
    <div>
      {products
        .filter((product) => product.category === selectedCategory)
        .map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
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
