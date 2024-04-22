import React from 'react'
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

const SearchResults = (props) => {
  return (
    <div className='SearchResults'>
        {/* Add a TrackList component */}
        <TrackList userSearchResults={props.userSearchResults}/>
    </div>
  )
}

export default SearchResults;