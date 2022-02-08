import "./App.css"
import { Blog } from "./components/Blog"

const App = () => {
  const handleClick = () => {
    console.log("Click")
  }

  const handleChange = (e) => {
    const { value } = e.target
    const { name } = e.name
    console.log(value)
    console.log(name)
  }

  return (
    <div>
      <Blog title="Soy un titulo" />
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} name="test" id="" />
    </div>
  )
}

export default App
