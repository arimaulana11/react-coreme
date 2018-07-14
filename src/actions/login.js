import qs from 'qs';
import {  api, client_id, client_secret, grant_type, scope, } from '../config/path'

export const USER_DATA = 'USER_DATA';
export const LOGIN_FIELD = 'LOGIN_FIELD';
export const LOGIN_LOADER = 'LOGIN_LOADER';

export const userdata = (user : Object) => {
  return {type: USER_DATA, user: user};
};

export const loginfield = (field : Object) => {
  return {type: LOGIN_FIELD, field: field};
};

export const loginIsLoader = (isLoading : Boolean) => {
  return {type: LOGIN_LOADER, isLoading: isLoading};
};

export const loginAction = (username : String, password : String, callback) : any => {
  return (dispatch) => {
    dispatch(loginIsLoader(true));
    fetch(`${api}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify({ username: username, password: password, client_id:client_id, client_secret:client_secret, grant_type:grant_type, scope:scope })
    }).then((response) => response.json()).then((responseJson) => {
      dispatch(loginIsLoader(false));
      dispatch(userdata(responseJson));
      callback(responseJson);
    }).catch((error) => {
      console.error(error);
    });
  };
};
