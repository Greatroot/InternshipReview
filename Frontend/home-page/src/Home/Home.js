import React from "react"
import ReactDOM from "react-dom"
import DesignComponent from "./DesignComponent";
import Footer from "./Footer/Footer.js";
import Image from "./Image.js"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            companyName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return(
            <div>
                <Image />
                <form className="searchBar">
                <p> Because interning 
                    is supposed to be fun! </p>
                <input type = "text"
                placeholder = "Search for an internship company"
                name = "companyName" 
                value = {this.state.companyName}
                onChange = {this.handleChange} />
                <br />  <br /> 
                </form>
                <DesignComponent />
                <Footer />
            </div>  
        )
    }

}
export default Home