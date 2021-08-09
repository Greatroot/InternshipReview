import React from "react"
import Search from "./Search"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom';
import "./Form.css"
import { useState, Button, Modal } from "react";

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

function app() {
    return (
        <div>
          <div className="navbar-container container">
          <div className='icon'></div>
                    <Link to='/' className="navbar-logo">
                            Rate My Internships
                    </Link>
          </div>
            <hr></hr>
            <div className="form-box">
                <Search />
            </div>

            <div class="overlay">
                <div class="popup">
                    <h1>Confirmation</h1>
                    <div class='confirmed'>
                        <p>Your review was successfully submitted!</p>
                    </div>
                    
                    <div class="exit-overlay">
                        <button class="btn-cancel">Close</button>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}


/* Can maybe use for confirmation popup
function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  */
  

export default app