import React, { useState } from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults';


function App() {
const [searchResults, setSearchResults] = useState([
  {
    id: 1,
    name: 'track 1',
    artist: 'artist 1',
    album: 'album 1'
  },
  {
    id: 2,
    name: 'track 2',
    artist: 'artist 2',
    album: 'album 2'
  },
  {
    id: 3,
    name: 'track 3',
    artist: 'artist 3',
    album: 'album 3'
  }
])

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        {/* Add a SearchBar component */}

        <div className='App-playlist'>
          {/* Add a SearchResults component */}
          <SearchResults userSearchResults={searchResults} />
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
  )
}

export default App;
