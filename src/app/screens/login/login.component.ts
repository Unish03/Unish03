import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { MatDialog, MatDialogActions,MatDialogClose,MatDialogContent,MatDialogRef,MatDialogTitle} from '@angular/material/dialog';
import { DeviceCaptureComponent } from '../../shared/componets/device-capture/device-capture.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  // providers: [Router],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: DataServiceService, private dialog: MatDialog) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9]{7,10}$/)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9]+$/)
        ]
      ]
    });
  }
 
  get username() {
    return this.loginForm.get('username');
  }
 
  get password() {
    return this.loginForm.get('password');
  }
 
  onSubmit() {
    if (this.loginForm.valid) {
      // Proceed with login logic 
      this.service.setLoggedInFlag(true); // Assuming you have a service to manage login state
      this.openDialog(); // Open DeviceCaptureComponent dialog
      this.router.navigate(['/details']); // Navigate to ProfileComponent
    }
  }
  openDialog(){
    this.dialog.open(DeviceCaptureComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
    });
  }
}

