import React from "react";
import './style.scss';
import {useSelector} from 'react-redux';
import note from '../../img/fullheart.gif';




function Sideinfo() {

  const atoken = useSelector(state => state.token)

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

           </>);
}

export default Sideinfo;