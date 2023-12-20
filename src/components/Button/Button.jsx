import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./Button.css";

function Button({ categories, onClick }) {
  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    onClick(category); // Update selected category
    navigate(`/category/${category}`); // Navigate to the category page
  };

  return (
      <div>
        {categories.map((categoryElement) => (
            <button
                key={categoryElement.id}
                onClick={() => handleButtonClick(categoryElement.category)}
            >
              {categoryElement.category}
            </button>
        ))}
      </div>
  );
}

Button.propTypes = {
  categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;


///* 2nd way */

// function Button ({ categories, onClick, selectedCategory }) {
//   return (
//     <div>
//       {categories.map((category) => (
//         <button
//           key={category.id}
//           onClick={() => onClick(category.id)}
//           className={selectedCategory === category.id ? 'active' : ''}
//         >
//           {category.category}
//         </button>
//       ))}
//     </div>
//   );
// }

///* 2nd way */

// import React, { useState } from 'react';

// function Button({ categories, onClick }) {
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleClick = category => {
//     setActiveCategory(category);
//     onClick(category);
//   };

//   return (
//     <>
//       {categories.map((categoryElement, index) => (
//         <button
//           key={index}
//           onClick={() => handleClick(categoryElement.category)}
//           style={{ backgroundColor: activeCategory === categoryElement.category ? 'blue' : 'gray' }}
//         >
//           {categoryElement.category}
//         </button>
//       ))}
//     </>
//   );
// }

// export default Button;
