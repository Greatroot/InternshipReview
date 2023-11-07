import React from 'react';
import "./SearchResult.css";
import RatingStars from "../RatingStars/RatingStars";

//TODO: Implement the stars AND the date.
const SearchResult = ({ rating, entry_date, position, company, startMonth, startYear, endMonth, endYear, comments }) => {

    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-header--container">
                    <div className="card-header-stars">
                        <RatingStars rating={rating} />
                    </div>
                    <p>{entry_date}</p>
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