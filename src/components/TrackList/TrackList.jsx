import React from 'react'
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
  const {userSearchResults} = props;
  return (
    <div className='TrackList'>
        {/* map method renders a set of track components */}
        { userSearchResults.map((track) => (
            <Track key={track.id} track={track}/>
      ))} 
    </div>
  )
}

export default TrackList;