import React, { useState } from "react"
import Axios from 'axios'

function Search() {

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [rating, setRating] = useState(0);
    const [startMonth, setStartMonth] = useState(0);
    const [startYear, setStartYear] = useState(0);
    const [endMonth, setEndMonth] = useState(0);
    const [endYear, setEndYear] = useState(0);
    const [comments, setComments] = useState("");
    const [newComment, setNewComment] = useState("")
    const [reviewList, setReviewList] = useState([]);


    const addReview = () => {
        Axios.post('https://internship-review-backend.herokuapp.com/create', {

            company: company,
            position: position,
            rating: rating,
            startMonth: startMonth,
            startYear: startYear,
            endMonth: endMonth,
            endYear: endYear,
            comments: comments,
        }).then((() => {
            console.log("success");
            setReviewList([
                ...reviewList, {
                    company: company,
                    position: position,
                    rating: rating,
                    startMonth: startMonth,
                    startYear: startYear,
                    endMonth: endMonth,
                    endYear: endYear,
                    comments: comments,
                },
            ]);
        }))
    };

    return (
        <div className="form-parameters">
            <div className="form-header">
                <p> Write a Review </p>
            </div>
            <form>
                <label>Name of Company:</label>
                <input
                    type="text"
                    className="input-text"
                    onChange={(event) => {
                        setCompany(event.target.value)
                    }}
                />
                <br />

                <label>Internship Start Date:</label>
                <div className="start-month">
                    <select
                        value={startMonth}
                        name="startMonth"
                        onChange={(event) => {
                            setStartMonth(event.target.value)
                        }}
                    >
                        <option value="">Month</option>
                        <option value="1"> January</option>
                        <option value="2">February </option>
                        <option value="3">March </option>
                        <option value="4">April </option>
                        <option value="5"> May</option>
                        <option value="6"> June</option>
                        <option value="7"> July</option>
                        <option value="8"> August</option>
                        <option value="9"> September</option>
                        <option value="10"> October</option>
                        <option value="11"> November</option>
                        <option value="11">December </option>
                    </select>
                </div>
                <div className="start-year">
                    <select
                        value={startYear}
                        name="startYear"
                        onChange={(event) => {
                            setStartYear(event.target.value)
                        }}
                    >
                        <option value="">Year</option>
                        <option value="2016"> 2016</option>
                        <option value="2017">2017 </option>
                        <option value="2018">2018 </option>
                        <option value="2019">2019 </option>
                        <option value="2020"> 2020</option>
                        <option value="2021"> 2021</option>
                    </select>
                </div>
                <br /><br /><br />
                <label>Internship End Date:</label>
                <div className="start-month">
                    <select
                        value={endMonth}
                        name="endMonth"
                        onChange={(event) => {
                            setEndMonth(event.target.value)
                        }}
                    >
                        <option value="">Month</option>
                        <option value="1"> January</option>
                        <option value="2">February </option>
                        <option value="3">March </option>
                        <option value="4">April </option>
                        <option value="5"> May</option>
                        <option value="6"> June</option>
                        <option value="7"> July</option>
                        <option value="8"> August</option>
                        <option value="9"> September</option>
                        <option value="10"> October</option>
                        <option value="11"> November</option>
                        <option value="11">December </option>
                    </select>
                </div>
                <div className="start-year">
                    <select
                        value={endYear}
                        name="endYear"
                        onChange={(event) => {
                            setEndYear(event.target.value)
                        }}
                    >
                        <option value="">Year</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <br /><br /><br />

                <label>Internship Position:</label>
                <input
                    type="text"
                    className="input-text"
                    onChange={(event) => {
                        setPosition(event.target.value)
                    }}
                />
                <br /><br />

                <label>Internship Rating:</label>
                <div className="radio-label">
                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="oneStar"
                            checked={rating === "oneStar"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }}
                        /> 1</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="twoStar"
                            checked={rating === "twoStar"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} /> 2</div>
                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="threeStar"
                            checked={rating === "threeStar"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} /> 3</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="fourStar"
                            checked={rating === "fourStar"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} /> 4</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="fiveStar"
                            checked={rating === "fiveStar"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} /> 5</div>
                </div>
                <br /><br />

                <label>Internship Review:</label>

                {/* <span class='textarea' role='textbox' contenteditable> */}
                    <input
                        type="text"
                        className="review-text"
                        onChange={(event) => {
                            setComments(event.target.value)
                        }} />
                {/* </span> */}



                <br /><br /><br />
                <div className="button-submit">
                    <button
                        onClick={addReview}
                    >Add Review</button>
                </div>
            </form>
        </div>
    )
}


export default Search