import React,{useEffect,useState} from 'react';
import Playlists from '../../components/Playlists';
import Tracks from '../../components/Tracks';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "../../components/Container";
import Button from '../../components/Button';
import fav from '../../img/fullheart.gif';
import nofav from '../../img/empty-heart.png';
import './style.scss';




function Playlist(props) {

const location = useLocation(); 
const atoken = useSelector((state)=>state.token)
const info = location.info;
const getid = location.pathname.split("/");
const pageid= getid[2]
const [tracks,setTracks] = useState([])
const [playlistdata,setPlaylistdata] = useState([])
const [likes,setLikes] = useState(false);

// Problemas presentes: refreshear la página crea problema en autentificación.
// probar solucionar con redux



  useEffect(()=> {
   fetchData(`https://api.spotify.com/v1/playlists/${pageid}`)
   
 },[]);

 async function fetchData(url) {
  const data = await fetch(
      url,
      {
      headers: {
          'Authorization': 'Bearer ' + atoken
      }
      })
  const dataJson = await data.json();

  
  setPlaylistdata(dataJson)
  if(dataJson.tracks){
    setTracks(dataJson.tracks.items)
    
  }
  
      


 }

 function favAplaylist(){
  setLikes(!likes)
  }
    


  return (
    <Container>
     <div className="playlist-general"><div className="playlist-col01"><Playlists id={info.id} name={info.name} img={info.img} tracks={tracks} owner={info.owner} onClick={false}/><Button onClick={false} label="REPRODUCIR" />
      {tracks.length>0? <p>{tracks.length} Canciones</p>:false}
      
       <img className="playlist-heart" src={likes? fav:nofav} onClick={favAplaylist}/></div> 
     <div> {tracks.map((track,key)=>{
     return (<Tracks name={track.track.name} artist={track.track.artists[0].name} album={track.track.album.name} time={track.track.duration_ms} key={key}/>)
   })}</div></div>
    </Container>
  );
}

export default Playlist;