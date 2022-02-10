import React from "react"
import "./Product.css"

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img className="product-image" src={product.thumbnail} alt="" />
      </div>
      <div className="product-detail">
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
    </div>
  )
}

export default Product
