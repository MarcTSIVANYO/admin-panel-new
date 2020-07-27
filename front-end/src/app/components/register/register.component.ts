import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

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
    password_confirmation: null,
    terms:null
  }
// Initialization of error to handle for unauthorized user
public error = {
  name: null,
  email: null,
  password: null
};

  constructor(
    private jarwisService: JarwisService,
    private router: Router,
    private notifyService : NotificationService) { }

    // function that post data login to db via laravel
    onSubmit() {
      this.jarwisService.register(this.form).subscribe(
        data => {
          console.log(data);
          this.notifyService.showSuccess("User created", "Success");
          this.router.navigateByUrl('/login'); // redirect to profile if user signin
        },
        error => this.handleError(error) // error handler is called here
      );
    }

   // Error function to handle unauthorized user display
   handleError(error) {
    this.error = error.error.errors;
    if(this.error.name){
      this.notifyService.showError(this.error.name, "Erreur")
    }
    if(this.error.email){
      this.notifyService.showError(this.error.email, "Erreur")
    }
    if(this.error.password){
      this.notifyService.showError(this.error.password, "Erreur")
    }
  }
}
