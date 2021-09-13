import React, { useState } from "react";
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

const Home = ({ resultsSearchTerm, setResultsSearchTerm }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        const { value } = event.target
        setSearchTerm(value);
    };

    const searchReviews = () => {
        setResultsSearchTerm(searchTerm);
        // console.log("searchReviews just got run")
        // console.log(resultsSearchTerm);
    };

    return (
        <div className="home-container">
            <Header />
            <Image />
            <div className="hero">
                <div className='slogan'>
                    <h1> Because Interning
                        Should Be Fun!</h1>
                    <form className='searchBar'>
                        <input type="text"
                               placeholder="Search for companies"
                               name="companyName"
                               value={ searchTerm }
                               onChange={ handleChange }
                               className="searchBar-input"
                        />
                        <Link to='/results' className='search-icon'>
                            <button className='search-button' type='submit' onClick={ searchReviews }>
                                <IoSearchOutline />
                            </button>
                        </Link>
                    </form>
                    <p>OR</p>
                    <div className='mobile-nav-btn'>
                    <Link to="/add-internship" className='btn-link'>
                        <Button buttonStyle="btn--shadow"> Rate an Internship </Button>
                    </Link>
                    </div>
                </div>
                {/* <SearchBar /> */}

            </div>

            <DesignComponent />
            <Footer />
        </div>
    );
}

export default Home