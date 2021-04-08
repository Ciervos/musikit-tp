import React,{useEffect,useState} from "react";
import './style.scss';
import {useSelector} from 'react-redux';
import note from '../../img/fullheart.gif';




function Sideinfo() {
const username = useSelector((state)=>state.name);
const avatar = useSelector((state)=>state.avatar);
const testtoken = useSelector((state)=>state.token)
const atoken = testtoken.length>5 ? testtoken :localStorage.getItem("token")


 useEffect(()=> {
   console.log(username,avatar,testtoken)
  
  },[]);

//   const [userdata,setUserdata] = useState({name:"Loading...",avatar: note})
//to fix: arreglar tema de token, sideinfo carga antes que al store le llegue el token actualizado. Una nueva sessión arruina el acceso
//   useEffect(()=> {
//     fetchData("https://api.spotify.com/v1/me")
  
//   },[]);

//   async function fetchData(url) {
//     const data = await fetch(
//         url,
//         {
//         headers: {
//             'Authorization': 'Bearer ' + atoken
//         }
//         })
//     const dataJson = await data.json();
    
//     console.log(dataJson)
//     console.log(dataJson.images)
//     setUserdata({
//      ...userdata,  
//      name: dataJson.display_name,
//      avatar:  dataJson.images[0].url, 
//     })
  
//    }

  return (<><img className="sideinfo-logo" src={note}/>
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={note}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Inicio</a>
            </div> 
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={note}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Buscar</a>
            </div> 
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={note}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Tu Bibloteca</a>
            </div> 

           <h2 className="sideinfo-title">PLAYLISTS</h2>
           <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={note}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Crear playlist</a>
            </div> 

            <div className="sideinfo-menu">
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">¡Hola!</a>
            </div> 
            <div className="sideinfo-menu">
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Espero que te guste</a>
            </div> 
            <div className="sideinfo-menu">
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Esta replica de spotify</a>
            </div> 
            <div className="sideinfo-menu">
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">:D</a>
            </div> 

            <div className="sideinfo-user">
              <img className="sideinfo-useravatar" src={avatar}/>
               <span>{username}</span>
            </div>

           </>);
}

export default Sideinfo;