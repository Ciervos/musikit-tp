import React,{useState} from 'react';
import './style.scss';
import {useSelector} from 'react-redux';
import fav from '../../img/fullheart.gif';
import nofav from '../../img/empty-heart.png';
import play from '../../img/icon-play.png';
import pause from '../../img/icon-pause.png';
import back from '../../img/icon-reverse.png';
import foward from '../../img/icon-ff.png';
import shuffle from '../../img/icon-shuffle.png';





function Player() {
  const song = useSelector((state)=>state.playertrack);
  const [likes,setLikes] = useState(false);
  const [playing,setPlaying] = useState(false);

  function changeIcon(event){
    
    if(event.target.name==="heart"){
      setLikes(!likes)
    }else{
      setPlaying(!playing)
    }
    }

  return (<div className="player-cont">
  <div className="player-songinfo">
    <img className="player-songimg" src={song.img}/>
    <div className="player-nameauthor">
      <span className="songname">{song.name}</span>
      <span className="songauthor">{song.author}</span>
    </div>
    <img className="player-songheart" name="heart" src={likes? fav:nofav} onClick={changeIcon}/>
  </div>
  <div className="player-player">
    <div>
    <img className="player-songicons" src={shuffle} onClick={false}/>
    <img className="player-songicons" src={back} onClick={false}/>
    <img className="player-songicons" name="play" src={playing? pause:play} onClick={changeIcon}/>
    <img className="player-songicons" src={foward} onClick={false}/>
    </div>
    <div className="player-durationcont">
      <span>0:00</span><input type="range" min="0" max={song.duration} step="any"/><span>{song.duration}</span>
    </div>
  </div>
  <div className="player-volumen">icono depositivos+volumen</div>
           </div>);
}

export default Player;