import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseUrl} from "../shared/utils";

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl=baseUrl;
  constructor(private http: HttpClient) { }

  // login user in fuctionality
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  // singup functionality
  register(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // password reset request to backend link
  sendPasswordRequestLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordRequestLink`, data);
  }

  // password reset response to backend link
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
}
