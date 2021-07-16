import React from "react";
import './SearchBar.css';
import {IoSearchOutline} from "react-icons/all";

const SearchBar = ({ type, placeholder, name, value, onChange }) => {

    return(
        <form className='search-bar'>
            <input type = { type }
                   placeholder = { placeholder }
                   name = { name }
                   value = { value }
                   onChange = { onChange }
                   className="search-bar--input"
            />
            <IoSearchOutline className='search-bar--icon'/>
        </form>
    );
}

export default SearchBar;