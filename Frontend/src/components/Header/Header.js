import React from 'react';
import {useState, useEffect} from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import {Button} from "../Button/Button";
import {FaBars, FaTimes} from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = ({ bottomBorder }) => {

    // TODO: Remove next four lines if we really decide to never use a hamburger menu.

    // const [click, setClick] = useState(false); // If false, show hamburger. If true, show 'x' icon.
    // const [button, setButton] = useState(true); // True if hamburger menu is in webapp mode and false
                                                // if hamburger is not in mobile mode.

    // const handleClick = () => setClick(!click);     // Toggle click to be true or false
    // const closeMobileMenu = () => setClick(false); // Closes the mobile hamburger menu.


    //TODO: If I use the showButton function for anything other than the hamburger menu that we're now not doing,
    // rename this function. It's not needed now, but if we have any functionality that depends on desktop vs.
    // mobile then I'll want to rename this function and use it for that.

    // Calculates whether the screen is in desktop view or in mobile view.
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // }

    //TODO: Remove this if the hamburger menu never gets used and if the hamburger menu was the only feature that
    // depended on desktop vs. mobile.

    // useEffect(() => {
    //     // Add an event listener so that everytime the window changes size, we call the
    //     // showButton function.
    //     window.addEventListener('resize', showButton);
    //
    //     // I put this clean-up func to reduce memory usage/leaks by getting rid of event listener
    //     // when we're done with it.
    //     return() => {
    //         window.removeEventListener('resize', showButton);
    //     }
    // }, [])

    return (
        // Sacchit's code:
    //     <header className="page-header">
    //         <h1></h1>
    //         <p>
    //             <mark class="white">RateMy</mark>
    //             <mark class="yellow">Internship</mark>
    //         </p>
    //         <h3> Write a review </h3>
    //         <img
    //     src="https://rscbga.com/wp-content/uploads/2021/04/png-internship-8-png-image-internship-png-1599_533.png"
    //     alt="Problem?"
    // />
    //     </header>

        // Ben's code:
        <>
            <nav className="navbar">
                <div className={`navbar-container container ${bottomBorder ? "bottom-border" : ""}`}>
                    <Link to='/' className="navbar-logo">
                        <div className='appName'>
                            Rate My Internships
                        </div>
                        
                    </Link>
                    {/*TODO: Remove if the hamburger menu never gets used*/}
                    {/*<div className="menu-icon" onClick={handleClick} >*/}
                    {/*    {click ? <FaTimes /> : <FaBars /> }*/}
                    {/*</div>*/}
                    <ul className='nav-btn'>
                        <Link to="/add-internship" className='btn-link'>
                            <Button buttonStyle="btn--outline"> Rate an Internship </Button>
                        </Link>

                        {/* ******* Everything below is the log in and sign up buttons for authentication *******
                        ********** Will implement later! **********
                     */}
                        {/*<li className='nav-btn'>*/}
                        {/*    {button ? (*/}
                        {/*        <Link to='/login' className='btn-link'>*/}
                        {/*            <Button buttonStyle='btn--outline'>Log In</Button>*/}
                        {/*        </Link>*/}
                        {/*    ) : (*/}
                        {/*        <Link to='/login' className='btn-link'>*/}
                        {/*            <Button buttonStyle='btn--outline'*/}
                        {/*                    buttonSize='btn--mobile'*/}
                        {/*                    onClick={closeMobileMenu}*/}
                        {/*            >*/}
                        {/*                Log In*/}
                        {/*            </Button>*/}
                        {/*        </Link>*/}
                        {/*    )}*/}
                        {/*</li>*/}
                        {/*<li className='nav-btn'>*/}
                        {/*    {button ? (*/}
                        {/*        <Link to='/signup' className='btn-link'>*/}
                        {/*            <Button buttonStyle='btn--outline'>Sign Up</Button>*/}
                        {/*        </Link>*/}
                        {/*    ) : (*/}
                        {/*        <Link to='/signup' className='btn-link'>*/}
                        {/*            <Button buttonStyle='btn--outline'*/}
                        {/*                    buttonSize='btn--mobile'*/}
                        {/*                    onClick={closeMobileMenu}*/}
                        {/*            >*/}
                        {/*                Sign Up*/}
                        {/*            </Button>*/}
                        {/*        </Link>*/}
                        {/*    )}*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;