import React from "react"
import Search from "./Search"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom';
import "./Form.css"
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Button } from '../../components/Button/Button';

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

const Form = () => {
    // True if the submit button was clicked and the modal is showing.
    // False if submit button has not been clicked.
    const [show, setShow] = useState(false);

    // The cancel button on the modal
    const actions = (
        <div className="btn-close">
            <Link to="/">
                <Button buttonStyle='btn-outline' buttonSize='btn-medium' buttonColor='whitesmoke'>
                    Close
                </Button>
            </Link>
        </div>
    );

    // Handles removing modal when user hits close button.
    const onClose = () => {
        setShow(false);
    }

    return (
        <div>
          <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                            Rate My Internships
                    </Link>
          </div>
            <hr></hr>
            <div className="form-box">
                <Search show={ show } setShow={ setShow }/>
            </div>
            <Modal header="Confirmation"
                   content="Your review was successfully submitted!"
                   actions={ actions }
                   show={ show }
                   onClose={ onClose }
            />

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
  

export default Form;