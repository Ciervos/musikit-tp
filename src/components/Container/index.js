import React from 'react';
import Topmenu from "../Topmenu/index";
import './style.scss'



function Container(props) {


  return (
 <><div className="cont-left"><div className="cont-sideinfo"><p>"Side Info"</p></div>
 <div className="cont-right">
   <div className="cont-topmenu"><Topmenu/></div>
 <div className="cont-midcont">{props.children}</div>
 </div></div>
 <div className="cont-player"><p>"Player"</p></div>
 </>
  );
}

export default Container;