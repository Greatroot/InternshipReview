import React from 'react';
import Header from './Header/Header';
import Home from "./Home"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// TODO: Update the social media links once we make actual accounts.
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/instagram' component={() => {
                     window.location.href = 'https://www.instagram.com';
                     return null;
                }} />
                <Route path='/instagram' component={() => {
                    window.location.href = 'https://www.instagram.com';
                    return null;
                }} />
                <Route path='/linked-in' component={() => {
                    window.location.href = 'https://www.linkedin.com/in/ben-kosa-2b04251ab/';
                    return null;
                }} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
