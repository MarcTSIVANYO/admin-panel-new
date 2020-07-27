import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  // this property not related to AuthService
  public loggedIn:boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService) { }

    ngOnInit() {
      this.authService.authStatus.subscribe( value => this.loggedIn = value);
    }

    logout(event: MouseEvent) {
      // prevent default for the href
      event.preventDefault();

      // remove token from localStorage
      this.tokenService.remove();

      // change status of login to false then redirect to home
      this.authService.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
    }

}
