import { useState } from "react"

function App() {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(0)

  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleCounter = () => {
    //Aseguramos que el valor de counter sea el último
    setCounter((prevCounter) => prevCounter + 1)
  }
  return (
    <div>
      <div>
        <h1>Contador: {counter}</h1>
        <button onClick={handleCounter}>+1</button>
      </div>
      <div>
        <h1>Mensaje</h1>
        <input type="text" onChange={handleChange} />
        <p>El valor del estado message es: {message}</p>
      </div>
    </div>
  )
}

export default App
