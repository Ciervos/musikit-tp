import React from "react";
import './style.scss';
import {useSelector} from 'react-redux';




function Topmenu() {

  const atoken = useSelector(state => state.token)
  const mainurl = useSelector((state)=>state.mainurl);

  return (<><a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">DESTACADOS</a> 
           <a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">PODCASTS</a> 
           <a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">LISTAS</a> 
           <a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">GENEROS Y ESTADOS DE ANIMO</a>
           <a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">NUEVOS LANZAMIENTOS</a>
           <a href={`${mainurl}/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">DESCUBRIR</a>
           </>);
}

export default Topmenu;