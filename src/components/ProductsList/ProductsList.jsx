// ProductsList.jsx
import PropTypes from 'prop-types';
import './ProductsList.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsList({ selectedCategory }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
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

        if (selectedCategory) {
            fetchProducts();
        }
    }, [selectedCategory]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="products-list">
            {products.map(product => (
                <div key={product.id} className="product-item" onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt={product.title} className="product-item-image" />
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