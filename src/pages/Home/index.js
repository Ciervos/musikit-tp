import React from 'react';
import './style.scss';
import Button from '../../components/Button';
import {useSelector} from 'react-redux';


function Home() {
  const baseUrl="https://accounts.spotify.com/authorize";
  const clientId= "73ac758eddf5481d85db56a36527b94c";
  const responseType= "token";
  const mainurl = useSelector((state)=>state.mainurl);
  const redirectUri=`${mainurl}/dashboard`;
  
  
  function handleClick() {
    window.location.href=`${baseUrl}?client_id=${clientId}&scope=user-library-read,playlist-read-private,playlist-modify-public,user-read-recently-played&response_type=${responseType}&redirect_uri=${redirectUri}`
  }

  return (
    <div className="home-cont">
      <div className="home-fakeimg"/>
      <span className="home-text" alt="texto de bienvenida">TP de Spotify Clon by <a className="home-text-a" href="https://github.com/Ciervos">María Luján ❤</a></span>
      <Button onClick={handleClick} label="LOGIN" />
      
    </div>
  );
}

export default Home;