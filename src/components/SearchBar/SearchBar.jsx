import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='SearchBar'>
        <input placeholder='Enter a Song, Album, or Artist' type="text" />
        <button className='SearchButton'>
            SEARCH
        </button>
    </div>
  )
}

export default SearchBar;