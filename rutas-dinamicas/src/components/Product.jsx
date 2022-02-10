import React from "react"
import "./Product.css"

const Product = ({ product }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="product-image" src={product.thumbnail} alt="" />
      </div>
      <div className="product-detail">
        <p className="price">${product.price}</p>
        <p className="title">{product.title}</p>
      </div>
    </div>
  )
}

export default Product
