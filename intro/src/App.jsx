import "./App.css"
import { Blog } from "./components/Blog"
import Child from "./components/Child"

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

  const handleCallBack = (text) => {
    console.log(text)
  }

  return (
    <div>
      <Blog title="Soy un titulo" />
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} name="test" id="" />
      <div>
        <Child callback={handleCallBack} />
      </div>
    </div>
  )
}

export default App
