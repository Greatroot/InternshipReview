import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Footer from "./pages/Home/Footer";

// TODO: Update the social media links once we make actual accounts.
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                {/*<Route path='/add-internship' component={Form}/>*/}
                <Route path='/results' component={Results} />
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

