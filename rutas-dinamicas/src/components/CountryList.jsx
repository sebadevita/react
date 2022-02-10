import React from "react"
import countries from "../data/countries"
import Country from "./Country"

const CountryList = () => {
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.code} country={country} />
      ))}
    </div>
  )
}

export default CountryList
