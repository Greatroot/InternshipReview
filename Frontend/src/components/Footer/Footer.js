import React from "react"
import "./Footer.css";

// TODO: Make left-footer--items all working links to those pages once we make them.
function Footer() {
    return (
        <div>
            <div className="main-footer"> {/* ***************** main-footer **************** */}
                <div className="left-right-footer">
                    <div className="left-footer"> {/* ******************** left-footer ******************** */}
                        <div className="left-footer--header">
                            <h2>Rate My Internships</h2>
                        </div>
                        <div className="left-footer--items">
                            <p>About Us </p>
                            <p>Terms of Use </p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="right-footer"> {/* *********** right-footer ************ */}
                        <div className="right-footer--header">
                            <p>Contact Us</p>
                        </div>
                        <p className="footer-email"> ratemyinternshipsofficial@gmail.com </p>
                        <div className="footer-socials">
                            <div className="social-icon">
                                <a href="https://www.instagram.com/ratemyinternships/?utm_medium=copy_link">
                                    < i class="fa fa-instagram fa-2x"></i>
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/company/ratemyinternships/">
                                    < i class="fa fa-linkedin fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer"> {/* ************** bottom-footer **************** */}
                    <p>© 2021 ratemyinternship, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
                export default Footer;