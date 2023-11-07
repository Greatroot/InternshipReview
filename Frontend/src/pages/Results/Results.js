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

const Results = ({ homeSearchTerm }) => {
    // Supposed to be an array, NOT an object!!! How I fixed the "setInput not a func" error.
    const [ input, setInput ] = useState(homeSearchTerm); // The input the user types in.
    const [ reviews, setReviews ] = useState([])// All of the reviews in the database.
    const [ filteredReviews, setFilteredReviews ] = useState([]); // The internship reviews the user searched for.

    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
                                    // Being used so that we can have the useEffect hook do 2 different things based
                                    // on whether it has run for the first time or sometime after.

    // Should it only get reviews every page refresh or more frequently than that?
    // Play around with the difference between getting data once per page refresh or more. Test performance.

    // Acts as "componentDidMount"
    useEffect(() => {
        // Fill this out later when we connect to the backend.
        // The idea will be to make an api call after every full second
        // of the user not typing anything into the search bar, no hitting
        // enter required.

        // Might use Redux instead.

        if(firstUpdate.current) { // if this is the first time we are mounting the page, then get our reviews from the database.
            getReviews();
            console.log(`Got reviews in useEffect(): ${reviews}` )
            firstUpdate.current = false;

        }

    }, []);

    // For when the input field updates (so when the user enters a keystroke into the searchbar).
    useEffect(() => {
        const eventObj = { target: { value: input } };
        console.log(`eventObj.target.value = ${eventObj.target.value}`)
        searchResults(eventObj);
    }, [input]);

    // For when the reviews get retrieved from the database on the initial render.
    useEffect(() => {
        if(homeSearchTerm !== "") {
            console.log("Initial render & homeSearchTerm !== ''");

            const eventObj = { target: { value: homeSearchTerm } };
            console.log(`eventObj.target.value = ${eventObj.target.value}`)
            searchResults(eventObj);
        }
    }, [reviews]);

    const renderResults = () => {
        if(filteredReviews !== undefined)
        {
            return filteredReviews.map((review) => {
                return (
                    <div className="item" key={review.id}>
                        <SearchResult rating={review.rating}
                                      entry_date={review.entry_date}
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

    const getReviews = () => {
        // Axios.get('https://internship-review-backend.herokuapp.com/reviews?').then((response) => {
        Axios.get('http://localhost:3001/reviews?').then((response) => {
            console.log(response);
            // Filter the reviews so that they are initially in order by most recent to least recent.
            const reviewsInOrder = response.data.reverse();
            setReviews(response.data);
            setFilteredReviews(response.data); // "initializes the filteredReviews so that the page will
        }).catch(({response}) => {
            // Put stuff in here if you want to handle heroku crashing in a user friendly way.
        });
    }

    const searchResults = (event) => {
        console.log(`event.target.value: ${event.target.value}`);
        const searchTerm = event.target.value;
        console.log(`searchTerm: ${searchTerm}`);
        console.log(`results: ${reviews}`);
        const newFilter = reviews.filter((value) => {
            return value.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.position.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredReviews(newFilter);
        console.log(`filteredResults: ${filteredReviews}`)
    }

    // TODO: Currently runs every single keystroke. Make it so there is a delay before running setInput().
    const handleUserTyping = (event) => {
        setInput(event.target.value);
        // // getReviews(); Should it only get reviews every page refresh or more frequently than that?
        // searchResults(event);
    };

    return(
        <>
            <Header bottomBorder="true" />
            <div className="results-container">
                <div className="searchBar-container">
                    <SearchBar type = "text"
                               placeholder = "Search for an internship company or position"
                               name = "companyName"
                               value = { input }
                               onChange = { handleUserTyping }
                    />
                </div>
                <div className="search-term">
                    {(input !== "") ? (
                        <h1>{`Results for "${input}"`}</h1>
                        ) :
                        null
                    }
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
