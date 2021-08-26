import React, {useEffect, useState, useRef } from 'react';
import "./Results.css"
import Axios from 'axios';
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// TODO: EXTRA: Make the results pop up without the user having to hit enter. Give it a short delay.

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
    const [ results, setResults ] = useState(dummyInfo); // The internship reviews the user searched for.

    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
                                    // Being used so that we can have the useEffect hook do 2 different things based
                                    // on whether it has run for the first time or sometime after.

    const renderResults = () => {
        if(results !== undefined)
        {
            return results.data.map((review) => {
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

    useEffect(() => {
        // Fill this out later when we connect to the backend.
        // The idea will be to make an api call after every full second
        // of the user not typing anything into the search bar, no hitting
        // enter required.

        // Might use Redux instead.

        testResults();

            // if(firstUpdate.current) { // If this is the first time useEffect is run...
            //     getInitialResults();
            //     firstUpdate.current = false;
            //     return;
            // } else { // ...if it's the 2nd, 3rd, 4th, etc. time useEffect is being run...
            //     getSearchResults();
            // }
        }, [input]);
    
    const getInitialResults = () => {
        Axios.get('https://internship-review-backend.herokuapp.com/popular').then((response) => {
        // Axios.get('http://localhost:3306/popular').then((response) => {
            console.log(`Initial API call: \n${response}`);

            setResults(response); // Is this efficient?
        });
    };

    const getSearchResults = () => {
        Axios.get('https://internship-review-backend.herokuapp.com/search?', {
        //     Axios.get('https//localhost:3306/search?', {
            params: { term: input }
            }).then((response) => {
            console.log(`Grabbing search results: \n${response}`);

            setResults(response); // Is this efficient?
        });

        // const results = await Axios.get('https://internship-review-backend.herokuapp.com/reviews');
        // console.log(results);
    }

    // Remove after done testing.
    const testResults = () => {
        Axios.get('https://internship-review-backend.herokuapp.com/reviews?').then((response) => {
        // Axios.get('https://localhost:3306/reviews?').then((response) => {
            console.log(response);
        });
    }

    const handleUserTyping = (event) => {
        // const {name, value} = event.target;
        setInput(event.target.value);
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
