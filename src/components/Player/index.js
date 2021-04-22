import React from "react";
import './style.scss';
import {useSelector} from 'react-redux';




function Player() {
  const song = useSelector((state)=>state.playertrack);

  return (<div className="player-cont">
  <div className="player-songinfo">
    <img className="player-songimg" src={song.img}/>
    <div className="player-nameauthor">
      <span className="songname">{song.name}</span>
      <span className="songauthor">{song.author}</span>
    </div>
  </div>
  <div className="player-player">simbolos+duración</div>
  <div className="player-volumen">icono depositivos+volumen</div>
           </div>);
}

export default Player;