import React,{useEffect,useState} from 'react';
import Playlists from '../../components/Playlists';
import Tracks from '../../components/Tracks';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "../../components/Container";
import './style.scss';




function Playlist(props) {

const location = useLocation(); 
const atoken = useSelector((state)=>state.token)
const info = location.info;
const getid = location.pathname.split("/");
const pageid= getid[2]
const [tracks,setTracks] = useState([])
const [playlistdata,setPlaylistdata] = useState([])

// Problemas presentes: refreshear la página crea problema en autentificación.



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


  return (
    <Container>
     <Playlists id={info.id} name={info.name} img={info.img} tracks={tracks} owner={info.owner} onClick={false}/> 
     {tracks.map((track,key)=>{
     return (<Tracks name={track.track.name} artist={track.track.artists[0].name} album={track.track.album.name} time={track.track.duration_ms} key={key}/>)
   })}
    </Container>
  );
}

export default Playlist;