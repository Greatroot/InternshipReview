import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Footer from "../src/components/Footer/Footer";
import Form from "./pages/Form/Form";
import { Button } from './components/Button/Button';
import Axios from 'axios'

function App() {
        const [data, setData] = React.useState(null);

        React.useEffect(() => {
        Axios.get("https://internship-review-backend.herokuapp.com/api/get").then((data) =>  {
        // fetch("/reviews")
        // .then((res) => res.json())
        // .then((data) => setData(data.message));
        console.log(data.data)
    });
 }, []);

    //IMPORTANT: Be sure to not put the Header in App.js. There are different versions of the header, so it's better to put the header
    // in separately for each page.
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/add-internship' component={Form}/>
                <Route path='/results' component={Results} />
                {/* <Route path='/submit' component={Home} /> */}
                <Route path='/instagram' component={() => {
                    window.location.href = "https://www.instagram.com/ratemyinternships/?hl=en";
                    return null;
                }} />
                <Route path='/linked-in' component={() => {
                    window.location.href = "https://www.linkedin.com/company/ratemyinternships/";
                    return null;
                }} />
            </Switch>
            {/* </Footer> */}
        </BrowserRouter>
    )
}

export default App;