import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>This is the about page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda
        accusantium quod aperiam saepe, similique dolores nam reprehenderit sed
        a sint voluptas, id earum quas? Doloribus doloremque quisquam cum ullam!
      </p>
      <p>
        You want to contact me? <Link to="/contact">Click here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
