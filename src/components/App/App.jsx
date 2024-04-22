import React, { useState } from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [playlistName, setPlaylistName] = useState('My Playlist1');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: 'playlist 1',
      artist: ' playlist artist 1',
      album: 'playlist album 1'
    },
    {
      id: 2,
      name: 'Playlist 2',
      artist: 'playlist artist 2',
      album: 'playlist album 2'
    },
  ]);

  
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
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  )
}

export default App;
