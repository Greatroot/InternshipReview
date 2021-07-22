import { useState } from 'react';
import JSONDATA from "./MOCK_DATA.json";
import './App.css';


function App(){
  const [searchTerm, setSeachTerm] = useState('')

  return (
    <div className="SearchApp">
        <input 
          type="text" 
          placeholder="Search ..." 
          onChange={event => {
            etSeachTerm(event.target.value)
          }}
        />
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          } else {
            return "None found";
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}> 
              <p>{val.first_name}</p>
            </div>
          )
        })}
    </div>
  )  
}

