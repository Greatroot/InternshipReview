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
    // const [data, setData] = React.useState(null);
    // React.useEffect(() => {
    //     fetch("/create")
    //       .then((res) => res.json())
    //       .then((data) => setData(data.message));
    //   }, []);
    

    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/add-internship' component={Form}/>
                <Route path='/results' component={Results} />
                {/* <Route path='/submit' component={Home} /> */}
                {/* need to add one for when we click the submit button of the form it takes us to the home page */}
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

