import React,{useEffect,useState} from "react";
import './style.scss';
import {useSelector} from 'react-redux';
import logo from '../../img/spotify-logo.png';
import addplaylist from '../../img/icon-add.png';
import library from '../../img/icon-library.png';
import home from '../../img/icon-home.png';
import search from '../../img/icon-search.png';




function Sideinfo() {
const username = useSelector((state)=>state.name);
const avatar = useSelector((state)=>state.avatar);
const testtoken = useSelector((state)=>state.token)
const atoken = testtoken.length>5 ? testtoken :localStorage.getItem("token")




  return (<><img className="sideinfo-logo" src={logo}/>
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={home}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Inicio</a>
            </div> 
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={search}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Buscar</a>
            </div> 
            <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={library}/>
               <a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="sideinfo-menutxt">Tu Bibloteca</a>
            </div> 

           <h2 className="sideinfo-title">PLAYLISTS</h2>
           <div className="sideinfo-menu">
               <img className="sideinfo-sideicons" src={addplaylist}/>
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