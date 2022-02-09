import React from "react"
import countries from "../data/countries"
import Country from "./Country"
import "./CountryList.css"

const CountryList = () => {
  return (
    <div>
      {countries.map((country) => (
        <div>
          <Country key={country.id} country={country} />
        </div>
      ))}
    </div>
  )
}

export default CountryList
