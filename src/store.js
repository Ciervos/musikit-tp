import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import placeholder from '../src/img/avatar-placeholder.png';
import albumplaceholder from '../src/img/marinaalbum.jpg';

const InitialState = {
  token: "",
  name: "Loading...",
  avatar: placeholder,
  mainurl: "http://localhost:3000", 
  playertrack:{
   name: "Purge The Poison",
   author: "MARINA", 
   img: albumplaceholder,
   duration: "3:33",
  },
};

export const reducer = (state=InitialState, action) =>{
  switch(action.type){
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.token,
      }
    case "ADD_PERSON":
      return {
        ...state,
        name: action.name,
        avatar: action.avatar,
        }
    case "ADD_TRACK":
      return {
        ...state,
        playertrack:{
          name: action.info.name,
          author: action.info.owner, 
          img: action.info.img,
          duration: "3:33",
         },
        }    
    default:
      return state;
  }
};

export const addToken = (token) => (dispatch) =>{
  
  return dispatch({
    type: "ADD_TOKEN",
    token,
  });
}

export const addPerson = (name,avatar) => (dispatch) =>{
  
  return dispatch({
    type: "ADD_PERSON",
    name,
    avatar
  });
}

export const addTrack = (info) => (dispatch) =>{
  
  return dispatch({
    type: "ADD_TRACK",
    info,
  });
}

export function initializeStore(){

  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}