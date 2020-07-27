import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // when loggIn is changed, authStatus has to change as well
  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedin());
  authStatus = this.loggedIn.asObservable();

  constructor( private tokenService: TokenService) {
  }


  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

}
