import React from "react"
import Footer from "../components/footer"
import Header from "../components/Header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>This is the contact page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde id
        tenetur assumenda doloribus quibusdam asperiores perferendis sit ratione
        autem, error impedit possimus facere animi reprehenderit excepturi
        doloremque qui, eum fugiat.
      </p>
      <p>
        You can follow me on
        <a href="https://twitter.com/dyno_era" target="_blank">
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
