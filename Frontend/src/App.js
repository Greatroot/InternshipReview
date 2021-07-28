import { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState(0);
  const [startMonth, setStartMonth] = useState(0);
  const [startYear, setStartYear] = useState(0);
  const [endMonth, setEndMonth] = useState(0)
  const [endYear, setEndYear] = useState(0);
  const [comments, setComments] = useState("");

  const [newComment, setNewComment] = useState("")
  
  const [reviewList, setReviewList] = useState([]);

  //internship website database link: https://internship-review-backend.herokuapp.com/

  const addReview = () => {
    Axios.post('https://internship-review-backend.herokuapp.com/create', {
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
  };

  const getReviews = () => {
    Axios.get('https://internship-review-backend.herokuapp.com/reviews').then((response) => {
      setReviewList(response.data);
    });
  };

  /* not updated to new database format
  const updateComments = (id) => {
    Axios.put('http://localhost:3001/update', {comments: newComment,id: id}).then(
      (response) => {
      setReviewList(reviewList.map((val) => {
        return val.id == id ? {
          id: val.id, 
          company: val.company, 
          position: val.position, 
          rating: val.rating, 
          startMonth: val.start_month, 
          end: val.end, 
          comments: newComment} : val
      }))
    })
  }*/

  const deleteReview = (id) => {
    Axios.delete(`https://internship-review-backend.herokuapp.com/delete/${id}`).then((response) => {
      setReviewList(reviewList.filter((val) => {
        return val.id != id
      }))
    })
  }

  return (
    <div className="App">
      <div className="information">
        <label>Company Name:</label>
        <input type="text" onChange={(event) => {
          setCompany(event.target.value)
          }}/>

        <label>Position:</label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value)
          }}/>

        <label>Rating:</label>
        <input type="number" onChange={(event) => {
          setRating(event.target.value)
          }}/>

        <label>Start Month:</label>
        <input type="number" onChange={(event) => {
          setStartMonth(event.target.value)
          }}/>

        <label>Start Year:</label>
        <input type="number" onChange={(event) => {
          setStartYear(event.target.value)
          }}/>

        <label>End Month:</label>
        <input type="number" onChange={(event) => {
          setEndMonth(event.target.value)
          }}/>

        <label>End Year:</label>
        <input type="number" onChange={(event) => {
          setEndYear(event.target.value)
          }}/>

        <label>Comments:</label>
        <input type="text" onChange={(event) => {
          setComments(event.target.value)
          }}/>

        <button onClick={addReview}>Add Review</button>
      </div>
      <hr></hr>
      <div className="employees"> 
        <button onClick={getReviews}>Show Reviews</button> 
        {reviewList.map((val, key) => {
          return (
            <div className="employee"> 
              <div>
                <h3>Company Name: {val.company}</h3> 
                <h3>Position: {val.position}</h3>
                <h3>Rating: {val.rating}</h3>
                <h3>Start Month: {val.start_month}</h3>
                <h3>Start Year: {val.start_year}</h3>
                <h3>End Month: {val.end_month}</h3>
                <h3>End Year: {val.end_year}</h3>
                <h3>Comments: {val.comments}</h3>
              </div>
              <div>
                <input 
                type="text" 
                placeholder="change comment" 
                onChange={(event) => {
                  setNewComment(event.target.value)
                  }}
                /> 
                {/*<button onClick={()=>{updateComments(val.id)}}>Update</button>*/}

                <button onClick={()=>{deleteReview(val.id)}}>Delete</button> 

              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default App;

