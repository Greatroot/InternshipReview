import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD:Frontend/src/App.js
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Footer from "./pages/Home/Footer";
=======
import Header from './Header/Header';
import Home from "./Home/Home";
import DesignComponent from './Home/DesignComponent';
import Footer from "./Home/Footer/Footer.js";
>>>>>>> 8a26c7db0ed951d6a1441dcd51341b9ba6681bfe:Frontend/home-page/src/App.js

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

