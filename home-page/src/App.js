import React from 'react';
import Header from './Header';
import Home from "./Home"
import Footer from "./Footer";
import Image from "./Image"
import WhiteComponent from './WhiteComponent';
import BlackComponent from './BlackComponent';

function App() {
    return (
        <div>
            <Header />
            <Image />
            <Home />
            <WhiteComponent />
            <BlackComponent />
            <Footer />
        </div>
    )
}

export default App;
