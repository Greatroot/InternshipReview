import React, { useState } from 'react';
import "./SearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

//TODO: Implement the stars AND the date.
const SearchResult = ({ rating, date, position, company, startMonth, startYear, endMonth, endYear, comments, entryDate }) => {
    const star = (starNum) => {
        return (
            <FontAwesomeIcon icon={rating >= starNum ? faStar : faStarRegular}
                             color={rating >= starNum ? "#EF7B45" : "#5EB1BF"}
                             size="2x"
            />
        );
    };


    // const renderStars = () => {
    //     switch(rating) {
    //         case 1:
    //             return <FontAwesomeIcon icon={["fas", "fa-star"] color="yellow"} />;
    //         case 2:
    //             return (
    //                 <FontAwesomeIcon icon={["fas", "fa-star"] color="yellow"} />;
    //                 <FontAwesomeIcon icon={["fas", "fa-star"] color="yellow"} />;
    //             );
    //     }
    // }

    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-header--container">
                    <div className="card-header-stars">
                        {star(1)}
                        {star(2)}
                        {star(3)}
                        {star(4)}
                        {star(5)}
                        {/*<FontAwesomeIcon icon={["fas", "fa-star"]} color="yellow" />*/}
                        {/*<FontAwesomeIcon icon={rating >= 2 ? ["fas", "fa-star"] : ["far", "fa-star"]}*/}
                        {/*                 color={rating >= 2 ? "yellow" : "grey"}*/}
                        {/*/>*/}
                        {/*<FontAwesomeIcon icon={rating >= 3 ? ["fas", "fa-star"] : ["far", "fa-star"]}*/}
                        {/*                 color={rating >= 3 ? "yellow" : "grey"}*/}
                        {/*/>*/}
                        {/*<FontAwesomeIcon icon={rating >= 4 ? ["fas", "fa-star"] : ["far", "fa-star"]}*/}
                        {/*                 color={rating >= 4 ? "yellow" : "grey"}*/}
                        {/*/>*/}
                        {/*<FontAwesomeIcon icon={rating >= 5 ? ["fas", "fa-star"] : ["far", "fa-star"]}*/}
                        {/*                 color={rating >= 5 ? "yellow" : "grey"}*/}
                        {/*/>*/}
                    </div>

                    <p>{`${entryDate.entryDay} ${entryDate.entryMonth}, ${entryDate.entryYear}`}</p>
                </div>
            </div>
            <div className="position-header">
                <div className="position-header--container">
                    <p>{position}</p>
                    <p>{company}</p>
                </div>
            </div>
            <div className="subheader-container">
                <div className="subheader">
                    <div className="subheader-text">
                        <p>{startMonth} {startYear} - {endMonth} {endYear}</p>
                    </div>
                </div>
                <div style={{ flex: 6 }}></div>
            </div>
            <div className="content">
                <p>
                    { comments }
                </p>
            </div>
        </div>
    );
};

export default SearchResult;

// This internship was awesome, I worked directly with the hiring manager as well
// as other interns. Everyone on my team was so friendly and willing to lend a hand.
//     I was able to see how my work impacted the company as a whole. We would have
// weekly meetings to check in with our team. I would definitely work here again
// next summer.