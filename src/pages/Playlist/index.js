import React,{useEffect,useState} from 'react';
import Playlists from '../../components/Playlists';
import Tracks from '../../components/Tracks';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import { addToken } from "../../store";
import Container from "../../components/Container";
import Button from '../../components/Button';
import fav from '../../img/fullheart.gif';
import nofav from '../../img/empty-heart.png';
import './style.scss';




function Playlist(props) {

const location = useLocation(); 
const testtoken = useSelector((state)=>state.token)
const atoken = testtoken.length>3 ? testtoken :localStorage.getItem("token")
const [info,setInfo] = useState([])
const getid = location.pathname.split("/");
const pageid= getid[2]
const dispatch = useDispatch();
const [tracks,setTracks] = useState([])
const [playlistdata,setPlaylistdata] = useState([])
const [likes,setLikes] = useState(false);

// Para evitar que al apretar f5, se borre el token de redux y se pierda la autorizacion, se crea la funcion de putInfoInLStore




  useEffect(()=> {
   putInfoInLStore() 
   
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

  function putInfoInLStore(){
    if(location.info && location.info.id == pageid){
      setInfo(location.info)
      
      localStorage.setItem("info", JSON.stringify(location.info));
      localStorage.setItem("token", atoken);
      
    }else{
      let pastInfo = JSON.parse(localStorage.getItem("info"));
      setInfo(pastInfo) 
      dispatch(addToken(localStorage.getItem("token")));
      console.log(pastInfo)
      console.log(localStorage.getItem("token"))
    }
    }

    


  return (
    <Container>
     <div className="playlist-general"><div className="playlist-col01">
       <Playlists id={info.id} name={info.name} img={info.img} tracks={tracks} owner={info.owner} onClick={false}/>
       <Button onClick={false} label="REPRODUCIR" />
      {tracks.length>0? <p>{tracks.length} Canciones</p>:false}
      
       <img className="playlist-heart" src={likes? fav:nofav} onClick={favAplaylist}/></div> 
     <div> {tracks.map((track,key)=>{
     return (<Tracks name={track.track.name} artist={track.track.artists[0].name} album={track.track.album.name} time={track.track.duration_ms} key={key}/>)
   })}</div></div>
    </Container>
  );
}

export default Playlist;