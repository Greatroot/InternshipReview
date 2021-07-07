import React, {useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";

const Results = () => {
    const { input, setInput } = useState("");

    useEffect(() => {
        // Fill this out later when we connect to the backend.
        // The idea will be to make an api call after every full second
        // of the user not typing anything into the search bar, no hitting
        // enter required.

        // Might use Redux instead.
    }, [input]);

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput(value);
    };

    return(
        <div>
            <SearchBar type = "text"
                       placeholder = "Search for an internship company"
                       name = "companyName"
                       value = {input}
                       onChange = {handleChange}
            />
        </div>
    );
};

export default Results;
