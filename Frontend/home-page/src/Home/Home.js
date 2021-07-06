import React from "react"
import ReactDOM from "react-dom"
import WhiteComponent from "./WhiteComponent";
<<<<<<< HEAD
import Footer from "./Footer.js";
=======
import BlackComponent from "./BlackComponent";
import Footer from "../Footer/Footer";
import Image from "./Image";
>>>>>>> baa65afe34fee5be7baab16270f5bed350feddd2

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
                <WhiteComponent />
                <Footer />
            </div>  
        )
    }

}
export default Home