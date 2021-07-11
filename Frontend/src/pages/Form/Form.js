import React from "react"
import Search from "./search"
import Header from "../Header/Header"
import Footer from "../Footer/Footer.js"

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

function app() {
    return (
        <div className="form-box">
            {/* <Header /> */}
            <Search />
            {/* <Footer />  */}
        </div>
    )
}

export default app