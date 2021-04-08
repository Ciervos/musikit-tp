import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import placeholder from '../src/img/avatar-placeholder.png';

const InitialState = {
  token: "",
  name: "Loading...",
  avatar: placeholder, 
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

export function initializeStore(){

  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}