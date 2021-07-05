import React from "react"
import ReactDOM from "react-dom"
import WhiteComponent from "./WhiteComponent";
import BlackComponent from "./BlackComponent";
import Footer from "./Footer";

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
                <form className="searchBar">
                <p> Because 
                    <mark className="yellow"> interning </mark>
                    is supposed to be fun! </p>
                <input type = "text"
                placeholder = "Search for your dream company"
                name = "companyName" 
                value = {this.state.companyName}
                onChange = {this.handleChange} />
                <br />  <br /> 
                </form>
                <WhiteComponent />
                <BlackComponent />
            </div>  
        )
    }

}
export default Home