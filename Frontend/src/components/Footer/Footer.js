import React from "react"
import "./Footer.css";


function Footer() {
    return (
        <div>
            <footer className="main-footer">
                <div className="left-footer">
                    <div className="left-footer-rmi">
                        <p>Rate My Internships</p>
                        <p>About Us </p>
                        <p>Terms of Use </p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div class="right-footer">
                    <div className="right-footer-header">
                        <p>Contact Us</p>
                    </div>
                    <p> ratemyinternshipsofficial@gmail.com </p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="linkedin">
                    <a href="https://www.linkedin.com/company/ratemyinternships/">
                        < i class="fa fa-linkedin fa-2x"> </i>
                    </a>
                </div>
                <div className="insta">
                    <a href="https://www.instagram.com/ratemyinternships/?utm_medium=copy_link">
                        < i class="fa fa-instagram fa-2x"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}

                export default Footer;