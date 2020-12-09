import React from 'react';
import './style.scss'
import note from '../../img/music-note-icon.png';



function Tracks(props) {


  return (
    <div className="tracks-cont">
  <img height="50px" width="50px" src={note}/>
  <div>
   <p>{props.name}</p>
  <p>{props.artist} - {props.album}</p>
  </div>
    </div>
  );
}

export default Tracks;