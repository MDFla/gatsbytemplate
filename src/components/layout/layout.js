import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"
import Hero from "../hero/hero"

export default ({ children }) => (
    <div>
        <Header />
        {children}
        <Hero />
        <Footer />
    </div>
)