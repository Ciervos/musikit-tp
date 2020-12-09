import React from 'react';
import './style.scss'



function Playlist(props) {

function newhandleClick(){
 if(props.onClick){
  props.onClick(props)
 }

}
  return (
    <div  className="playlist-cont" onClick={newhandleClick}>
      <img className="playlist-img" src={props.img}/>
     <h1 className="playlist-title">{props.name}</h1>
     <h2 className="playlist-owner">by {props.owner}</h2>
    </div>
  );
}

export default Playlist;