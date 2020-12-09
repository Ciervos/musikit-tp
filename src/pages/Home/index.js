import React from 'react';


function Home() {
  const baseUrl="https://accounts.spotify.com/authorize";
  const clientId= "73ac758eddf5481d85db56a36527b94c";
  const responseType= "token";
  const redirectUri="http://localhost:3000/dashboard"

  return (
    <div>
     <a href={`${baseUrl}?client_id=${clientId}&scope=user-library-read,playlist-read-private,playlist-modify-public,user-read-recently-played&response_type=${responseType}&redirect_uri=${redirectUri}`}>Login</a>
    </div>
  );
}

export default Home;