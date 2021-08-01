import React, {useEffect, useState} from 'react';
import "./Results.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Results = () => {
    const { input, setInput } = useState("");

    useEffect(() => {
        // Fill this out later when we connect to the backend.
        // The idea will be to make an api call after every full second
        // of the user not typing anything into the search bar, no hitting
        // enter required.

        // Might use Redux instead.
    }, [input]);

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput(value);
    };

    return(
        <>
            <Header bottomBorder="true" />
            <div className="results-container">
                <div className="searchBar-container">
                    <SearchBar type = "text"
                               placeholder = "Search for an internship company"
                               name = "companyName"
                               value = { input }
                               onChange = { handleChange }
                    />
                </div>
                <div className="search-term">
                    <h1>Google</h1>
                </div>
                <div className="search-results">
                    <SearchResult />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Results;
