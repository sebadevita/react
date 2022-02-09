import "./App.css"
import CountryList from "./components/CountryList"
import logo from "./img/ml-logo@2x.png"

function App() {
  return (
    <div className="main-container">
      <img className="logo" src={logo} alt="" />
      <CountryList />
    </div>
  )
}

export default App
