
import React from 'react';
import './Playlist.css';


const Playlist = () => {
  return (
    <div className='Playlist'>
        <input defaultValue={"New Playlist"} type="text" />
        {/* Add a TrackList component */}
        <button className='Playlist-save'>
            SAVE TO SPOTIFY
        </button>
    </div>
  )
}

export default Playlist;