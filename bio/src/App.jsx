import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const getData = await fetch("https://api.github.com/users/sebadevita")
    const dataToJson = await getData.json()
    console.log(dataToJson)
    setUser(dataToJson)
  }

  return (
    <div>
      <p>Mi nombre es: {user.name}</p>
    </div>
  )
}

export default App
