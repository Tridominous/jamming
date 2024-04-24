import React, { useCallback, useState } from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import { Spotify } from '../../util/Spotify/Spotify';

function App() {

  const [playlistName, setPlaylistName] = useState('My Playlist1');
  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   id: 1,
    //   name: 'playlist 1',
    //   artist: ' playlist artist 1',
    //   album: 'playlist album 1'
    // },
    // {
    //   id: 2,
    //   name: 'Playlist 2',
    //   artist: 'playlist artist 2',
    //   album: 'playlist album 2'
    // }
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
    },
    {
      id: 4,
      name: 'track 4',
      artist: 'artist 4',
      album: 'album 4'
    },
    {
      id: 5,
      name: 'track 5',
      artist: 'artist 5',
      album: 'album 5'
    }
  ])

  const addTrack = useCallback(
    (track) => {
      if(playlistTracks.some((savedTrack) => savedTrack.id == track.id))
      return;
    setPlaylistTracks((prev) => [...prev, track])
    },
    [playlistTracks]
  )

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prev) => prev.filter((currentTrack) => currentTrack.id !== track.id))
    }, []
  )

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name)
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  }, [playlistName, playlistTracks])

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        {/* Add a SearchBar component */}
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          {/* Add a SearchResults component */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          {/* Add a Playlist component */}
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack} 
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            />
        </div>
      </div>
    </div>
  )
}

export default App;
