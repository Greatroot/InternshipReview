import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import DesignComponent from "./DesignComponent";
import Footer from "../../components/Footer/Footer";
import Image from "./Image.js";
import { IoSearchOutline } from "react-icons/all";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button/Button";

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            companyName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className="home-container">
                <Image />
                <form className="searchBar">
                    <div className='slogan'>
                        <h1> Because Interning
                            Should Be Fun!</h1>

                        <input type="text"
                            placeholder="Search for companies"
                            name="companyName"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                            className="searchBar-input"
                        />
                        <IoSearchOutline className='search-icon' />
                        <p>OR</p>
                    </div>
                    {/* <SearchBar /> */}
                    
                </form>
                {/* <div className='nav-btn'>
                    <Link to="/add-internship" className='btn-link'>
                        <div className='formButton'>
                            <Button buttonStyle="btn--outline"> Rate an Internship </Button>
                        </div>
                    </Link>
                </div> */}
                <DesignComponent />
                <Footer />
            </div>
        )
    }

}
export default Home