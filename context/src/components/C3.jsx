import React, { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

const C3 = () => {
  const themeData = useContext(ThemeContext)
  return (
    <>
      <h1>Soy el componente 3</h1>
      <p>El valor del theme es: {themeData}</p>
    </>
  )
}

export default C3
