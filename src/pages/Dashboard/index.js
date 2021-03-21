import React,{useEffect,useState} from 'react';
import Playlists from '../../components/Playlists';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch} from "react-redux";
import { addToken } from "../../store";
import Container from "../../components/Container";
import './style.scss';




function Dashboard() {

 const history = useHistory();
 const location = useLocation(); 
 const gettoken1 = location.hash.split("=",2);
 const gettoken2= gettoken1[1].split("&")
 const atoken = gettoken2[0];
 const dispatch = useDispatch();
 const [playdata,setPlaydata] = useState([]);
 const [lasttracks,setLasttracks] = useState([]);

 useEffect(()=> {
 
   fetchData("https://api.spotify.com/v1/me/playlists?offset=0&limit=5")
   fetchData("https://api.spotify.com/v1/me/player/recently-played?limit=5")
   
   dispatch(addToken(atoken));
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
  
  if(url==="https://api.spotify.com/v1/me/playlists?offset=0&limit=5"){
    setPlaydata(dataJson.items)
    }else if(url==="https://api.spotify.com/v1/me/player/recently-played?limit=5"){
     setLasttracks(dataJson.items)
    }

 }

 function handleClick(info){

 history.push({
  pathname:  `/Playlist/${info.id}`, 
  info, 
  atoken,
 })
 }
  return (
    <Container>
      <h1>Playlists:</h1>
   <div className="dashboard-list-cont">{playdata.map((play,key)=>{
     return (<Playlists id={play.id} name={play.name} img={play.images[0].url} key={key} tracks={play.tracks} owner={play.owner.display_name} onClick={handleClick}/>)
   })}</div>
     <h1>Escuchado Recientemente:</h1>
     <div className="dashboard-list-cont">{lasttracks.map((track,key)=>{
     return (<Playlists id={track.track.id} name={track.track.name} img={track.track.album.images[0].url} key={key} tracks="" owner={track.track.artists[0].name} onClick={handleClick}/>)
   })}</div>
    </Container>
  );
}

export default Dashboard;