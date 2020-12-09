import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const InitialState = {
  token: "",
};

export const reducer = (state=InitialState, action) =>{
  switch(action.type){
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.token,
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

export function initializeStore(){

  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}