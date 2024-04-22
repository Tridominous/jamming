import React from 'react'
import './Track.css';

const Track = (props) => {
  // return - 0r + if isRemoval
  const renderAction = () => {
    return <button className='Track-action'>{props.isRemoval ? '-' : '+' }</button>
  }

  return (
    <div className='Track'>
        <div className='Track-information'>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {/* <button className='Track-action'> + or - </button> */}
    </div>
  )
}

export default Track;