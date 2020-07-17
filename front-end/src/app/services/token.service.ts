import { Injectable } from '@angular/core';
import {baseUrl} from "../shared/utils";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // iss url on login and signup
  private iss = {
    login: baseUrl+'/login',
    register: baseUrl+'/register'
  }

  constructor() { }

  // token handle methode saved in localstorage()
  handle(token) {
    this.set(token);
  }

  // set item in the localStorage
  set(token){
    localStorage.setItem('token', token);
  }

  // get token from locaStorage
  get() {
    return localStorage.getItem('token');
  }

  // remove token from localStorage
  remove() {
    localStorage.removeItem('token');
  }

  // check if the token exist and is valid
  isValid() {
    const token = this.get()
    if(token) {
      const payload = this.payload(token);
      if(payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  // payload methode definition
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  // decode payload
  decode(payload) {
    return JSON.parse(atob(payload));
  }

  // confirm and return true if logged in
  loggedin(){
    return this.isValid();
  }

}
