import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./Product"
import "./Carousel.css"

const Carousel = () => {
  const { site } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const getData = await fetch(
      `https://api.mercadolibre.com/sites/${site.toUpperCase()}/search?q=celular`
    )
    const dataToJson = await getData.json()
    const resultsCopy = [...dataToJson.results]
    console.log(resultsCopy[0])
    setProducts(resultsCopy.slice(0, 5))
  }

  return (
    <div className="carousel-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Carousel
