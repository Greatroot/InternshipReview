import React, { useState } from "react"
import Axios from 'axios'
import Modal from "../../components/Modal/Modal";
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

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

    // True if the submit button was clicked and the modal is showing.
    // False if submit button has not been clicked.
    const [show, setShow] = useState(false);

    // The cancel button on the modal
    const actions = (
        <div className="btn-close">
            <Link to="/">
                <Button buttonStyle='btn--shadow' buttonSize='btn-medium' buttonColor='whitesmoke'>
                    Close
                </Button>
            </Link>
        </div>
    );

    // Handles removing modal when user hits close button.
    const onClose = () => {
        setShow(false);
    }


    const addReview = (e) => {
        if( // ALL of the fields in the form are filled out...
            company !== "" &&
            position !== "" &&
            rating !== 0 &&
            startMonth !== 0 &&
            startYear !== 0 &&
            endMonth !== 0 &&
            endYear !== 0 &&
            comments !== ""
            // newComment !== "" &&
            // reviewList !== ""
        ) {
            Axios.post('https://internship-review-backend.herokuapp.com/create', { //TODO: change
            // Axios.post('http://localhost:3306/create', {
                company: company,
                position: position,
                rating: rating,
                start_month: startMonth,
                start_year: startYear,
                end_month: endMonth,
                end_year: endYear,
                comments: comments,
            }).then((() => {
                console.log("success");
                setReviewList([
                    ...reviewList, {
                        company: company,
                        position: position,
                        rating: rating,
                        start_month: startMonth,
                        start_year: startYear,
                        end_month: endMonth,
                        end_year: endYear,
                        comments: comments,
                    },
                ]);
            }))

            setShow(true);
            e.preventDefault(); // Should stop the form from refreshing the page.
        }
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
                    required/>
                <br />

                <label>Internship Start Date:</label>
                <div className="start-month">
                    <select
                        value={startMonth}
                        name="startMonth"
                        onChange={(event) => {
                            setStartMonth(event.target.value)
                        }}
                        required>
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
                        required>
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
                        required>
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
                        required>
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
                    required/>
                <br /><br />

                <label>Internship Rating:</label>
                <div className="radio-label">
                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            checked={rating === "1"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }}
                            required /> 1</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            checked={rating === "2"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} required/> 2</div>
                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={rating === "3"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} requuired/> 3</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={rating === "4"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} required/> 4</div>

                    <div class="radio-inline">
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            checked={rating === "5"}
                            onChange={(event) => {
                                setRating(event.target.value)
                            }} required/> 5</div>
                </div>
                <br /><br />

                <label>Internship Review:</label>
                <textarea type='text' className="input-text"
                          onChange={(event) => {
                              setComments(event.target.value)
                          }}maxLength='400' placeholder='Your review here...' autoFocus>
                    </textarea>
                <br />
                <div className='word-counter'>
                    <span id='max-characters'>400 Characters Max</span>
                </div>
                <br /><br /><br />
                <div className="button-submit">
                    <button className='submit-review'
                            onClick={addReview}
                    >Add Review</button>
                </div>
            </form>

            {/* Popup confirmation overaly */}
            <Modal header="Confirmation"
                   content="Your review was successfully submitted!"
                   actions={ actions }
                   show={ show }
                   onClose={ onClose }
            />
        </div>
    )
}


export default Search





// import React, { useState } from "react"
// import Axios from 'axios'
// import Modal from "../../components/Modal/Modal";
// import { Button } from '../../components/Button/Button';
// import { Link } from 'react-router-dom';
//
// const Search = () => {
//
//     const [company, setCompany] = useState("");
//     const [position, setPosition] = useState("");
//     const [rating, setRating] = useState(0);
//     const [startMonth, setStartMonth] = useState(0);
//     const [startYear, setStartYear] = useState(0);
//     const [endMonth, setEndMonth] = useState(0);
//     const [endYear, setEndYear] = useState(0);
//     const [comments, setComments] = useState("");
//     const [newComment, setNewComment] = useState("")
//     const [reviewList, setReviewList] = useState([]);
//
//     // True if the submit button was clicked and the modal is showing.
//     // False if submit button has not been clicked.
//     const [show, setShow] = useState(false);
//
//     // The cancel button on the modal
//     const actions = (
//         <div className="btn-close">
//             <Link to="/">
//                 <Button buttonStyle='btn-outline' buttonSize='btn-medium' buttonColor='whitesmoke'>
//                     Close
//                 </Button>
//             </Link>
//         </div>
//     );
//
//     // Handles removing modal when user hits close button.
//     const onClose = () => {
//         setShow(false);
//     }
//
//     const addReview = () => {
//         Axios.post('https://internship-review-backend.herokuapp.com/create', {
//             company: company,
//             position: position,
//             rating: rating,
//             start_month: startMonth,
//             start_year: startYear,
//             end_month: endMonth,
//             end_year: endYear,
//             comments: comments,
//         }).then((() => {
//             console.log("success");
//             setReviewList([
//                 ...reviewList, {
//                     company: company,
//                     position: position,
//                     rating: rating,
//                     start_month: startMonth,
//                     start_year: startYear,
//                     end_month: endMonth,
//                     end_year: endYear,
//                     comments: comments,
//                 },
//             ]);
//         }))
//
//         if(
//             company !== "" &&
//             position !== "" &&
//             rating !== 0 &&
//             startMonth !== 0 &&
//             startYear !== 0 &&
//             endMonth !== 0 &&
//             endYear !== 0 &&
//             comments !== "" &&
//             newComment !== "" &&
//             reviewList !== ""
//         ) {
//             setShow(true);
//         }
//     };
//
//     return (
//         <div className="form-parameters">
//             <div className="form-header">
//                 <p> Write a Review </p>
//             </div>
//             <form>
//                 <label>Name of Company:</label>
//                 <input
//                     type="text"
//                     className="input-text"
//                     onChange={(event) => {
//                         setCompany(event.target.value)
//                     }}
//                 required/>
//                 <br />
//
//                 <label>Internship Start Date:</label>
//                 <div className="start-month">
//                     <select
//                         value={startMonth}
//                         name="startMonth"
//                         onChange={(event) => {
//                             setStartMonth(event.target.value)
//                         }}
//                         required>
//                         <option value="">Month</option>
//                         <option value="1"> January</option>
//                         <option value="2"> February</option>
//                         <option value="3"> March</option>
//                         <option value="4"> April</option>
//                         <option value="5"> May</option>
//                         <option value="6"> June</option>
//                         <option value="7"> July</option>
//                         <option value="8"> August</option>
//                         <option value="9"> September</option>
//                         <option value="10"> October</option>
//                         <option value="11"> November</option>
//                         <option value="12"> December</option>
//                     </select>
//                 </div>
//                 <div className="start-year">
//                     <select
//                         value={startYear}
//                         name="startYear"
//                         onChange={(event) => {
//                             setStartYear(event.target.value)
//                         }}
//                         required>
//                         <option value="">Year</option>
//                         <option value="2016">2016</option>
//                         <option value="2017">2017</option>
//                         <option value="2018">2018</option>
//                         <option value="2019">2019</option>
//                         <option value="2020">2020</option>
//                         <option value="2021">2021</option>
//                     </select>
//                 </div>
//                 <br /><br /><br />
//                 <label>Internship End Date:</label>
//                 <div className="start-month">
//                     <select
//                         value={endMonth}
//                         name="endMonth"
//                         onChange={(event) => {
//                             setEndMonth(event.target.value)
//                         }}
//                         required>
//                         <option value="">Month</option>
//                         <option value="1"> January</option>
//                         <option value="2"> February</option>
//                         <option value="3"> March</option>
//                         <option value="4"> April</option>
//                         <option value="5"> May</option>
//                         <option value="6"> June</option>
//                         <option value="7"> July</option>
//                         <option value="8"> August</option>
//                         <option value="9"> September</option>
//                         <option value="10"> October</option>
//                         <option value="11"> November</option>
//                         <option value="12"> December</option>
//                     </select>
//                 </div>
//                 <div className="start-year">
//                     <select
//                         value={endYear}
//                         name="endYear"
//                         onChange={(event) => {
//                             setEndYear(event.target.value)
//                         }}
//                         required>
//                         <option value="">Year</option>
//                         <option value="2016">2016</option>
//                         <option value="2017">2017</option>
//                         <option value="2018">2018</option>
//                         <option value="2019">2019</option>
//                         <option value="2020">2020</option>
//                         <option value="2021">2021</option>
//                     </select>
//                 </div>
//                 <br /><br /><br />
//
//                 <label>Internship Position:</label>
//                 <input
//                     type="text"
//                     className="input-text"
//                     onChange={(event) => {
//                         setPosition(event.target.value)
//                     }}
//                     required/>
//                 <br /><br />
//
//                 <label>Internship Rating:</label>
//                 <div className="radio-label">
//                     <div class="radio-inline">
//                         <input
//                             type="radio"
//                             name="rating"
//                             value="1"
//                             checked={rating === "1"}
//                             onChange={(event) => {
//                                 setRating(event.target.value)
//                             }}
//                             required /> 1</div>
//
//                     <div class="radio-inline">
//                         <input
//                             type="radio"
//                             name="rating"
//                             value="2"
//                             checked={rating === "2"}
//                             onChange={(event) => {
//                                 setRating(event.target.value)
//                             }}/> 2</div>
//                     <div class="radio-inline">
//                         <input
//                             type="radio"
//                             name="rating"
//                             value="3"
//                             checked={rating === "3"}
//                             onChange={(event) => {
//                                 setRating(event.target.value)
//                             }}/> 3</div>
//
//                     <div class="radio-inline">
//                         <input
//                             type="radio"
//                             name="rating"
//                             value="4"
//                             checked={rating === "4"}
//                             onChange={(event) => {
//                                 setRating(event.target.value)
//                             }}/> 4</div>
//
//                     <div class="radio-inline">
//                         <input
//                             type="radio"
//                             name="rating"
//                             value="5"
//                             checked={rating === "5"}
//                             onChange={(event) => {
//                                 setRating(event.target.value)
//                             }}/> 5</div>
//                 </div>
//                 <br /><br />
//
//                 <label>Internship Review:</label>
//                     <textarea type='text' className="input-text"
//                     onChange={(event) => {
//                         setComments(event.target.value)
//                     }}maxLength='400' placeholder='Your review here...' autoFocus required>
//                     </textarea>
//                     <br />
//                     <div className='word-counter'>
//                         <span id='max-characters'>400 Characters Max</span>
//                     </div>
//
//                 <br /><br /><br />
//
//             </form>
//             <div className="button-submit">
//                     <button disabled={!comments} className='submit-review'
//                         onClick={ addReview }
//                     >Add Review</button>
//                 </div>
//
//             {/* Popup confirmation overaly */}
//             <Modal header="Confirmation"
//                    content="Your review was successfully submitted!"
//                    actions={ actions }
//                    show={ show }
//                    onClose={ onClose }
//             />
//         </div>
//     )
// }
//
//
// export default Search