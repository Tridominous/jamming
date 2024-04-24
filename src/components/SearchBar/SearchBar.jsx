import React, { useCallback, useState } from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const passTerm = useCallback(() => {
    props.onSearch(term)
  }, [props.onSearch, term]);

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, [])
  return (
    <div className='SearchBar'>
        <input onChange={handleTermChange} placeholder='Enter a Song, Album, or Artist' type="text" />
        <button onClick={passTerm} className='SearchButton'>
            SEARCH
        </button>
    </div>
  )
}

export default SearchBar;