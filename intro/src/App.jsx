import "./App.css"
import { Blog } from "./components/Blog"

function App() {
  const clickMe = () => {
    console.log("Click")
  }
  return (
    <div>
      <Blog />
      <button onClick={clickMe}>Click me</button>
    </div>
  )
}

export default App
