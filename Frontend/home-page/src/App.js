import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header/Header';
<<<<<<< HEAD
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Image from "./Image"
import WhiteComponent from './WhiteComponent';
import BlackComponent from './BlackComponent';
||||||| f1b8eec
import Home from "./Home";
import Footer from "./Footer";
import Image from "./Image"
import WhiteComponent from './WhiteComponent';
import BlackComponent from './BlackComponent';
=======
import Home from "./Home/Home";
import Footer from "./Home/Footer";
import Image from "./Home/Image"
import WhiteComponent from './Home/WhiteComponent';
import BlackComponent from './Home/BlackComponent';
>>>>>>> 6449d5e6f4170df56518820b4a77cc3e0177992b

// TODO: Update the social media links once we make actual accounts.
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Image />
            <Switch>
                <Route path='/' exact component={Home} />
                {/*<Route path='/add-internship' component={Form}/>*/}
                <Route path='/instagram' component={() => {
                    window.location.href = 'https://www.instagram.com';
                    return null;
                }} />
                <Route path='/linked-in' component={() => {
                    window.location.href = 'https://www.linkedin.com/in/ben-kosa-2b04251ab/';
                    return null;
                }} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;

