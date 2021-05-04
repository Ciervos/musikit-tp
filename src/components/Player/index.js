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
import shuffleon from '../../img/icon-shuffleon.png';
import playlisticon from '../../img/icon-playlist.png';
import volume from '../../img/icon-volume.png';
import devices from '../../img/icon-monitor.png';
import egg from '../../img/easteregg.gif';





function Player() {
  const song = useSelector((state)=>state.playertrack);
  const [likes,setLikes] = useState(false);
  const [playing,setPlaying] = useState(false);
  const [shufflestatus,setShufflestatus] = useState(false);
  const [easteregg,setEasteregg] = useState(false);
  const [activeEgg,setActiveEgg] = useState(false);

//eastereggfunction
function easter(){
//activeEgg evita que la funcion se active varias veces al mismo tiempo  
  if(activeEgg===false){
  for (let i = 0; i < 1200; i++) {
    walk(i)
    
  }
}
  function walk(i) {
    setTimeout(function() {

      document.getElementById("easteregg").style.right = `${i}px`;
    
      if(i===1199){
        setEasteregg(false)
        setActiveEgg(false)
      }  
    }, 30*i);
  }

}; 
//fin easteregg

  function changeIcon(event){
    
    if(event.target.name==="heart"){
      setLikes(!likes)
    }else if(event.target.name==="play"){
      setPlaying(!playing)
    }else if(event.target.name==="devices"){
      setEasteregg(!easteregg)
      easter()
      setActiveEgg(true)
    
    }else{
      setShufflestatus(!shufflestatus)
    }
    }

  return (<div className="player-cont">
    <img className="player-easteregg" id="easteregg" src={easteregg? egg:false} onClick={false}/>
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
    <img className="player-songicons" src={shufflestatus? shuffleon:shuffle} onClick={changeIcon}/>
    <img className="player-songicons" src={back} onClick={false}/>
    <img className="player-songicons" name="play" src={playing? pause:play} onClick={changeIcon}/>
    <img className="player-songicons" src={foward} onClick={false}/>
    </div>
    <div className="player-durationcont">
      <span>0:00</span><input className="player-songbar" type="range" min="0" max={song.duration} step="any"/><span>{song.duration}</span>
    </div>
  </div>
  <div className="player-volumecont">
    <img className="player-icons" src={playlisticon} onClick={false}/>
    <img className="player-icons" name="devices" src={devices} onClick={changeIcon}/>
    <img className="player-icons" src={volume} onClick={false}/>
    <input className="player-volume" type="range" min="0" max="99" step="any"/>
  </div>
           </div>);
}

export default Player;