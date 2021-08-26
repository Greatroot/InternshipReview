import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import DesignComponent from "./DesignComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from "./Image.js";
import { IoSearchOutline } from "react-icons/all";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button/Button";

//TODO: Make the search bar have suggestions
// TODO: Make whatever the user types into the search bar a piece of state that gets passed as a prop
// into the Results page. Also naviage when user hits enter.

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
                <Header />
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
                        <div className='mobile-nav-btn'>
                        <Link to="/add-internship" className='btn-link'>
                            <Button buttonStyle="btn--shadow"> Rate an Internship </Button>
                        </Link>
                        </div>
                    </div>
                    {/* <SearchBar /> */}

                </form>

                <DesignComponent />
                <Footer />
            </div>
        )
    }

}
export default Home