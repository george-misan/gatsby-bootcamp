import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm George, a full-stack developer living in Helsinki</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
    </Layout>
  )
}

export default IndexPage
