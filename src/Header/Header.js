import React from 'react';

function Header() {
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
        <nav className="navbar">
            <nav className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className="navbar-icon">

                    </MdFingerprint>
                </Link>
            </nav>
        </nav>
    )
}

export default Header;