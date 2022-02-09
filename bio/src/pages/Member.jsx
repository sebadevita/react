import React from "react"
import { useParams } from "react-router-dom"
const Member = () => {
  const { id } = useParams()
  return <p>El id del miembro es: {id}</p>
}

export default Member
