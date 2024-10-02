import React from 'react';

const productsCardList = ({ products, onCardListClick }) => {
  return (
    <div className="product-container">
      {products.map((products) => (
        <div className="product-list" onClick={onCardListClick}>
            <div className="product-img"><img src={products.imgUrl} alt={products}></img></div>
            <div className="product-title">{products}</div>
            <div className="bascket"><button className='basket-btn'>장바구니에 담기</button></div>
            <div className="price">{products.price}</div>
        </div>
      ))}
    </div>
  );
};

export default productsCardList;
