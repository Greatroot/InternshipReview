import React from "react"
import Search from "./Search"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./Form.css"

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

function app() {
    return (
        <div>
            <hr></hr>
            <div className="form-box">
                <Search />
            </div>

            <div class="overlay">
                <div class="popup">
                    <h1>Confirmation</h1>
                    <p>Your review was successfully submitted!</p>
                    <div class="exit-overlay">
                        <button class="btn-cancel">Close</button>
                    </div>
                </div>
            </div>

            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default app