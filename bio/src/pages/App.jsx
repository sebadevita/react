import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const getData = await fetch("https://api.github.com/users/sebadevita")
    const dataToJson = await getData.json()
    setUser(dataToJson)
  }

  return (
    <div>
      <p>Mi nombre es: {user.name}</p>
      <Link to="/equipo"> Ir a la página de equipo</Link>
    </div>
  )
}

export default App
