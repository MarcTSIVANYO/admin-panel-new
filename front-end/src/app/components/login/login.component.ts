import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
   // Initialization of email and password on form
   public form = {
    email: null,
    password: null
  }
  // Initialization of error to handle for unauthorized user
  public error = null;

  constructor(
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router){}

   // function that post data login to db via laravel
   onSubmit() {
    this.jarwisService.login(this.form).subscribe(
      data => this.handleResponse(data),
       error => this.handleError(error) // error handler is called here
     )
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.router.navigateByUrl('/dashboard'); // redirect to profile if user signin
  }

   // Error function to handle unauthorized user display
   handleError(error) {
    this.error = error.error.error;
  }
}
