import { useState } from "react"
import frutilla from "./img/frutilla.jpg"

function App() {
  const [frutas, setFrutas] = useState([
    "banana",
    "manzana",
    "melón",
    "naranja",
    "uvas",
  ])
  const [showImage, setShowImage] = useState(false)
  const [inputFruta, setInputFruta] = useState("")

  const toggleImage = () => {
    setShowImage((prevValue) => !prevValue)
  }

  const handleInputChange = (e) => {
    const { value } = e.target
    setInputFruta(value)
  }

  const agregarFruta = () => {
    const frutasCopy = [...frutas, inputFruta]
    setFrutas(frutasCopy)
    setInputFruta("")
  }

  return (
    <div>
      <h1>Frutas</h1>

      <div>
        <ul>
          {frutas.map((fruta, key) => (
            <li key={key}>{fruta}</li>
          ))}
        </ul>
        <input
          type="text"
          name="fruta"
          onChange={handleInputChange}
          value={inputFruta}
        />
        <button onClick={agregarFruta}>Agregar fruta</button>
      </div>

      <div>
        <button onClick={toggleImage}>Show image</button>
      </div>

      <div>{showImage ? <img src={frutilla} alt="Frutilla"></img> : ""}</div>
    </div>
  )
}

export default App
