import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./Product"

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
    setProducts(resultsCopy.slice(0, 5))
  }

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Carousel
