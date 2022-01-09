import React, { useState } from 'react';
import axios from 'axios';
import UserProfil from "./UserProfil";
import './sass/App.scss';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState(" ");
    const [repos, setRepos] = useState([ ]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };

    const handleClick = async ( ) => {
        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result);
        } catch (err) {
            console.log(err)
        }
        
    };

    const handleKeyDown= (event) => {
        if (event.key === 'Enter') {
          handleClick()
        }
      }

    return (
        <div className="wrapper">
            <div id='search-bar'>
                <input type="text" onKeyDown={handleKeyDown} placeholder="Nazwa użytkownika"  onChange={handleChange}/>
                <button className="searchButton" onClick={handleClick}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <UserProfil repos={repos} />
        </div>
    ); 
};

export default SearchBar