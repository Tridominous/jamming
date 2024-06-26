import React, { useCallback } from 'react'
import './Track.css';

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track)
    },
    [props.onAdd, props.track]
  )

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track)
    },
    [props.onRemove, props.track]
  )
  
  // return - 0r + if isRemoval
  const renderAction = () => {
    if(props.isRemoval){
      return (
        <button onClick={removeTrack} className='Track-action'>
          -
        </button>
        )
    } else {
      return (
        <button onClick={addTrack} className='Track-action'>
          +
        </button>
          )
    }
  }


  return (
    <div className='Track'>
        <div className='Track-information'>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {/* <button className='Track-action'> + or - </button> */}
        {renderAction()}
    </div>
  )
}

export default Track;