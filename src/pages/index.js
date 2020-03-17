import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm George, a full-stack developer living in Helsinki</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
