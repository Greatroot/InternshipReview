import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header/Header';
import Home from "./Home/Home";
import WhiteComponent from './Home/WhiteComponent';
import Footer from "./Home/Footer.js";

// TODO: Update the social media links once we make actual accounts.
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                {/*<Route path='/add-internship' component={Form}/>*/}
                <Route path='/instagram' component={() => {
                    window.location.href = "https://www.instagram.com/ratemyinternships/?hl=en";
                    return null;
                }} />
                <Route path='/linked-in' component={() => {
                    window.location.href = "https://www.linkedin.com/company/ratemyinternships/";
                    return null;
                }} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;

