import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  ngOnInit(): void {
  }

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }
// Initialization of error to handle for unauthorized user
public error = {
  name: null,
  email: null,
  password: null
};

  constructor(
    private jarwisService: JarwisService) { }

    // function that post data login to db via laravel
    onSubmit() {
      this.jarwisService.register(this.form).subscribe(
        data => console.log(data),
        error => this.handleError(error) // error handler is called here
      );
    }

   // Error function to handle unauthorized user display
   handleError(error) {
    this.error = error.error.errors;
  }
}
