import React from "react";
import './style.scss';
import {useSelector} from 'react-redux';




function Topmenu() {

  const atoken = useSelector(state => state.token)

  return (<><a href={`http://localhost:3000/dashboard#access_token=${atoken}&token_type=Bearer&expires_in=3600`} className="topmenu-items">DESTACADOS</a> 
           <span className="topmenu-items">PODCASTS</span> 
           <span className="topmenu-items">LISTAS</span> 
           <span className="topmenu-items">GENEROS Y ESTADOS DE ANIMO</span>
           <span className="topmenu-items">NUEVOS LANZAMIENTOS</span>
           <span className="topmenu-items">DESCUBRIR</span>
           </>);
}

export default Topmenu;