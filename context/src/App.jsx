import "./App.css"
import { React, useState } from "react"
import { ThemeProvider } from "../src/contexts/ThemeContext.js"
import C1 from "./components/C1"

function App() {
  const [theme, setTheme] = useState("light")

  const handleClick = () => {
    setTheme("dark")
  }

  const handleCallback = () => {
    setTheme("light")
  }

  const themeValue = {
    theme: theme,
    handleCallback: handleCallback,
  }

  return (
    <ThemeProvider value={themeValue}>
      <div className="App"></div>
      <p>En App el valor del theme es: {theme}</p>
      <button onClick={handleClick}>Cambiar tema</button>
      <C1 />
    </ThemeProvider>
  )
}

export default App
