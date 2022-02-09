import React from "react"
import "./Country.css"

const Country = ({ country }) => {
  return (
    <div className="country-container">
      <img className="flag" src={country.flag} alt="" />
      <p>{country.name}</p>
    </div>
  )
}

export default Country
