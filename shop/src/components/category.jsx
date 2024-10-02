import React from 'react';

const CategoryBtn = ({ categories, onCategoryClick, className }) => {
  return (
    <div>
      {categories.map((category) => (
        <button 
          key={category}
          className={className} 
          onClick={() => onCategoryClick(category)}
          >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBtn;
