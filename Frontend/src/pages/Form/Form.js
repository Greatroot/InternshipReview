import React from "react"
import Search from "./Search"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom';
import "./Form.css"

const Form = () => {

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