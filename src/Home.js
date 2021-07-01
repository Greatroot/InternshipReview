import React from "react"
import ReactDOM from "react-dom"

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
                <button type="submit"> <i class="fa fa-search"></i></button>
                </form>
            </div>  
        )
    }

}
export default Home