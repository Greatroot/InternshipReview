import React, {useEffect, useState, useRef } from 'react';
import "./Results.css"
import Axios from 'axios';
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// TODO: EXTRA: Make the results pop up without the user having to hit enter. Give it a short delay.

// The link below is the timestamp for when Pedro implements search suggestions.
// https://youtu.be/x7niho285qs?t=962

// This is a dummy object to pass into a SearchResult component. Supposed to act as a placeholder for when the page
// first renders and before Axios has had the chance to make an api request.
const dummyInfo = {
        data: [
            {
                company: "Google",
                position: "Software Developer",
                rating: 4,
                startMonth: 9,
                startYear: 2020,
                endMonth: 9,
                endYear: 2021,
                comments: "Yay. It was fun.",
            }, {
                company: "Apple",
                position: "Software Developer",
                rating: 3,
                startMonth: 2,
                startYear: 2018,
                endMonth: 9,
                endYear: 2021,
                comments: "Yay. It was fun.",
            }, {
                company: "Broadstreet",
                position: "Software Developer",
                rating: 5,
                startMonth: 3,
                startYear: 2019,
                endMonth: 11,
                endYear: 2021,
                comments: "Yay. It was fun.",
            }
        ]
    }

const Results = () => {
    // Supposed to be an array, NOT an object!!! How I fixed the "setInput not a func" error.
    const [ input, setInput ] = useState(""); // The input the user types in.
    const [ results, setResults ] = useState([]); // All of the reviews in the database
    const [ filteredResults, setFilteredResults ] = useState([]); // The internship reviews the user searched for.

    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
                                    // Being used so that we can have the useEffect hook do 2 different things based
                                    // on whether it has run for the first time or sometime after.

    const renderResults = () => {
        if(filteredResults !== undefined)
        {
            return filteredResults.map((review) => {
                return (
                    <div className="item" key={review.id}>
                        <SearchResult rating={review.rating}
                            // date={}
                                      position={review.position}
                                      company={review.company}
                                      startMonth={review.start_month}
                                      startYear={review.start_year}
                                      endMonth={review.end_month}
                                      endYear={review.end_year}
                                      comments={review.comments}
                        />
                    </div>
            );
            });
        }
    };

    // Should it only get reviews every page refresh or more frequently than that?
    // Play around with the difference between getting data once per page refresh or more. Test performance.
    useEffect(() => {
        // Fill this out later when we connect to the backend.
        // The idea will be to make an api call after every full second
        // of the user not typing anything into the search bar, no hitting
        // enter required.

        // Might use Redux instead.

        if(firstUpdate.current) { // if this is the first time we are mounting the page, then get our reviews from the database.
            getReviews();
        }
            // if(firstUpdate.current) { // If this is the first time useEffect is run...
            //     getInitialResults();
            //     firstUpdate.current = false;
            //     return;
            // } else { // ...if it's the 2nd, 3rd, 4th, etc. time useEffect is being run...
            //     getSearchResults();
            // }
        }, []);


    //TODO: Remnants of me trying to handle the searching through the backend, which became a lost cause lol.
    // Remove this if never used.

    // const getInitialResults = () => {
    //     // Axios.get('https://internship-review-backend.herokuapp.com/popular').then((response) => {
    //     Axios.get('http://localhost:3001/popular').then((response) => {
    //         console.log(`Initial API call: \n${response}`);
    //
    //         setFilteredResults(response); // Is this efficient?
    //     });
    // };
    //
    // const getSearchResults = () => {
    //     // Axios.get('https://internship-review-backend.herokuapp.com/search?', {
    //         Axios.get('http//localhost:3001/search?', {
    //         params: { term: input }
    //         }).then((response) => {
    //         console.log(`Grabbing search results: \n${response}`);
    //
    //         setFilteredResults(response); // Is this efficient?
    //     });
    // }

    const getReviews = () => {
        // Axios.get('https://internship-review-backend.herokuapp.com/reviews?').then((response) => {
        Axios.get('http://localhost:3001/reviews?').then((response) => {
            console.log(response);
            setResults(response.data);
        });
    }

    const searchResults = (event) => {
        const searchTerm = event.target.value;
        const newFilter = results.filter((value) => {
            return value.title.includes(searchTerm);
        });

        setFilteredResults(newFilter);
    }

    const handleUserTyping = (event) => {
        setInput(event.target.value);
        // getReviews(); Should it only get reviews every page refresh or more frequently than that?
        searchResults(event);

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
                               onChange = { handleUserTyping }
                    />
                </div>
                <div className="search-term">
                    <h1>Google</h1>
                </div>
                <div className="search-results">
                    {renderResults()}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Results;
