
import React, { useCallback } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


const Playlist = (props) => {
  const handleNameChange = useCallback((event) => {
    props.onNameChange(event.target.value);
  }, [props.onNameChange]);


  return (
    <div className='Playlist'>
        <input onChange={handleNameChange} defaultValue={"New Playlist"} type="text" />
        {/* Add a TrackList component */}
        <TrackList 
          userSearchResults={props.playlistTracks} 
          onRemove={props.onRemove}
          isRemoval={true}
          />
        <button className='Playlist-save' onClick={props.onSave}>
            SAVE TO SPOTIFY
        </button>
    </div>
  )
}

export default Playlist;