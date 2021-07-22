import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import DesignComponent from "./DesignComponent";
import Footer from "../../components/Footer/Footer";
import Image from "./Image.js";
import {IoSearchOutline} from "react-icons/all";
import SearchBar from "../../components/SearchBar/SearchBar.js";

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
            <div className="home-container">
                <Image />
                 <form className="searchBar">
                    <p> Because Interning
                        Should Be Fun! </p>
                    {/* <input type = "text"
                           placeholder = "Search for an internship company"
                           name = "companyName"
                           value = {this.state.companyName}
                           onChange = {this.handleChange}
                           className="searchBar-input"
                    /> */}
                    <SearchBar />
                    {/* <IoSearchOutline className='search-icon'/> */}
                </form>
                <DesignComponent />
                <Footer />
            </div>
        )
    }

}
export default Home