import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { JarwisService } from '../../../services/jarwis.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.component.html',
  styleUrls: ['./response-password-reset.component.css']
})
export class ResponsePasswordResetComponent implements OnInit {

  public error=null;

  public form={
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  }
  constructor(
    private route : ActivatedRoute,
    private jarwisService: JarwisService,
    private router: Router,
    private notifyService : NotificationService
  ) {
    route.queryParams.subscribe(params=>{
      this.form.resetToken=params['token']
    });
   }

  ngOnInit(): void {
  }


  onSubmit() {
    this.jarwisService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
       error => this.handleError(error) // error handler is called here
     )
  }

  handleResponse(data) {
    console.log(data);
    if(data.error){
      this.notifyService.showError(data.error, "Erreur");
    }

    if(data.success){
      this.notifyService.showInfo(data.success, "Info");
      this.router.navigateByUrl('/login');
    }

  }

   // Error function to handle unauthorized user display
   handleError(error) {
    this.error = error.error.errors;

    if(this.error.email){
      this.notifyService.showError(this.error.email, "Erreur")
    }
    if(this.error.password){
      this.notifyService.showError(this.error.password, "Erreur")
    }
    if(this.error.password_confirmation){
      this.notifyService.showError(this.error.password_confirmation, "Erreur")
    }
  }

}
