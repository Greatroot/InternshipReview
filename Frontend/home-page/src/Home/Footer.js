import React from "react"
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <div>
        <footer className="main-footer">
            <div className="left-footer">
                <div className="left-footer-rmi"> 
                    Rate My Internships
                    </div>
                    About Us <br />
                    Terms of Use<br />
                    Privacy Policy  </div>
                <div class= "right-footer"> 
                <div className="right-footer-header">Contact Us </div> <br />
                    ratemyinternshipsofficial@gmail.com 
                </div>
                <br /> <br /> <br /><br />
                
            <div className="linkedin"> <a href = "https://www.linkedin.com/company/ratemyinternships/"> < i class="fa fa-linkedin fa-2x"> </i> </a>  </div>
            <div className="insta"> <a href = "https://www.instagram.com/ratemyinternships/?utm_medium=copy_link"> < i class="fa fa-instagram fa-2x"></i> </a>  </div>
        </footer>
    </div>
    )
}
export default Footer;