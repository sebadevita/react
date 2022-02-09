import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./pages/App"
import Team from "./pages/Team"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Member from "./pages/Member"

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/equipo" element={<Team />} />
      <Route exact path="/member/:id" element={<Member />} />
    </Routes>
  </Router>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
