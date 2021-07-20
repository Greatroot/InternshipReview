import React from "react"
import Search from "./Search"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./Form.css"

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

function app() {
    return (
        <div>
        <div className="form-box">
            <Search />
        </div>
        <br /><br /><br />
        <Footer /> 
        </div>
    )
}

export default app