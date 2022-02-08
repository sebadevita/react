import React from "react"
import Title from "./Title"
import Image from "./Image"

export const Blog = (props) => {
  const { title } = props
  return (
    <div>
      <Title title={title} />
      <Image />
    </div>
  )
}

export default Blog
