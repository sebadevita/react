import React from "react"

const ThemeContext = React.createContext("light") // En esta linea creamos el contexto

// Luego, hay que crear el provider y exportarlo
export const ThemeProvider = ThemeContext.Provider

export default ThemeContext
