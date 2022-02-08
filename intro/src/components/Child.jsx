import React from "react"

const Child = (props) => {
  const handleClick = () => {
    props.callback("Soy un texto")
  }
  return <button onClick={handleClick}>Disparar callback</button>
}

export default Child
