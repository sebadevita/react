import React from "react"
import { Link } from "react-router-dom"
import "./Country.css"

const Country = ({ country }) => {
  return (
    <div className="country-container">
      <img className="flag" src={country.flag} alt="" />
      <Link to={`/carousel/${country.code}`}>
        <p>{country.name}</p>
        <p>{country.id}</p>
      </Link>
    </div>
  )
}

export default Country
