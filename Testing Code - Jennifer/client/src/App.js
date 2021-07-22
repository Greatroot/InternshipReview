import { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0)
  const [comments, setComments] = useState("");

  const [newComment, setNewComment] = useState("")
  
  const [reviewList, setReviewList] = useState([]);

  //internship website database link: https://internship-review-backend.herokuapp.com/

  const addReview = () => {
    Axios.post('http://localhost:3001/create', {
      company: company, 
      position: position, 
      rating: rating,
      start: start,
      end: end,
      comments: comments,
    }).then((() => {
      console.log("success");
      setReviewList([
        ...reviewList, {
          company: company, 
          position: position, 
          rating: rating,
          start: start,
          end: end,
          comments: comments,
        },
      ]);
    }))
  };

  const getReviews = () => {
    Axios.get('http://localhost:3001/reviews').then((response) => {
      setReviewList(response.data);
    });
  };

  const updateComments = (id) => {
    Axios.put('http://localhost:3001/update', {comments: newComment,id: id}).then(
      (response) => {
      setReviewList(reviewList.map((val) => {
        return val.id == id ? {
          id: val.id, 
          company: val.company, 
          position: val.position, 
          rating: val.rating, 
          start: val.start, 
          end: val.end, 
          comments: newComment} : val
      }))
    })
  }

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
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

        <label>Start Date:</label>
        <input type="date" onChange={(event) => {
          setStart(event.target.value)
          }}/>

        <label>End Date:</label>
        <input type="date" onChange={(event) => {
          setEnd(event.target.value)
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
                <h3>Start Date: {val.start}</h3>
                <h3>End Date: {val.end}</h3>
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
                <button onClick={()=>{updateComments(val.id)}}>Update</button>

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

