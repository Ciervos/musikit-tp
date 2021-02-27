import React,{useState,useEffect} from 'react';
import './style.scss'
import note from '../../img/music-note-icon.png';



function Tracks(props) {
const [minutes,setMinutes] = useState("0:00");  


function convertMsToMin(){
  // En la primera conversión se pasan los milisegundos que nos da la api a minutos

  const firstConversion = props.time/60000;
  // El primer resultado no es perfecto ya que debemos seguir transformando para que resulte en minutos:segundos y actualmente solo esta en minutos
  
  const secondConversion= firstConversion.toString().split(".");
  //Se separa el minuto entero del resto. El resto sera pasado a segundos
  const fullMinute = secondConversion[0];
  const thirdConversion = "0." + secondConversion[1];
  const fourthConversion = parseFloat(thirdConversion)*60;
  const lastConversion = fourthConversion.toString().split(".");
  //Si los segundos son menores a 10, ocurre que queda "5:3" en vez de "5:03". Para evitar que suceda se agrega el if
  let seconds = "00"
  
  if(parseInt(lastConversion[0])<10){
    seconds = `0${lastConversion[0]}`
  
  }else{
    seconds = lastConversion[0];
    
  }


  setMinutes(`${fullMinute}:${seconds}`)

}

useEffect(()=> {
  convertMsToMin()
  
},[]);

  return (
    <div className="tracks-cont">
  <img height="50px" width="50px" src={note}/>
  <div>
   <p>{props.name}</p>
  <p>{props.artist} - {props.album}</p>
  </div>
  <p className="tracks-songtime">{minutes}</p>
    </div>
  );
}

export default Tracks;