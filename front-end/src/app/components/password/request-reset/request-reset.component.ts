import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };
  constructor(
    private jwtlarService: JarwisService,
    private notifyService : NotificationService,
  ) { }

  ngOnInit(): void {
  }

    // submit user email for request to backend
    onSubmit() {
      this.jwtlarService.sendPasswordRequestLink(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.notifyService.showError(error.error.error,"Error message")
      );
    }

    // hanndle response to submit
    handleResponse(data) {
      console.log(data.data);
      this.notifyService.showSuccess(data.data, "Succès");
      // make form field to null when user has submit email
      this.form.email = null;
    }
}
