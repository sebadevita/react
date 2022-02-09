import React from "react"

const Number = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * (10 - 0)) + 0
  }
  return <strong>{randomNumber()}</strong>
}

export default Number
