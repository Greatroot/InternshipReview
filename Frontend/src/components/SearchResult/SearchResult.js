import React from 'react';
import "./SearchResult.css";

const SearchResult = () => {

    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-header--container">
                    <h4 className="card-header-stars">Placeholder for stars</h4>
                    <p>Date placeholder</p>
                </div>
            </div>
            <div className="position-header">
                <div className="position-header--container">
                    <p>Software Engineer</p>
                    <p>Google</p>
                </div>
            </div>
            <div className="subheader-container">
                <div className="subheader">
                    <div className="subheader-text">
                        <p>Jun 2020 - Sept 2020</p>
                    </div>
                </div>
                <div style={{ flex: 6 }}></div>
            </div>
            <div className="content">
                <p>
                    This internship was awesome, I worked directly with the hiring manager as well 
                    as other interns. Everyone on my team was so friendly and willing to lend a hand. 
                    I was able to see how my work impacted the company as a whole. We would have 
                    weekly meetings to check in with our team. I would definitely work here again 
                    next summer.
                </p>
            </div>
        </div>
    );
};

export default SearchResult;