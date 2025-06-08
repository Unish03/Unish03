import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Router } from '@angular/router';

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
  @Output() loginSuccess = new EventEmitter<void>();
  loginForm: FormGroup;
 
  constructor(private fb: FormBuilder, private router: Router) {
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
      this.router.navigate(['/details']); // Navigate to ProfileComponent
      this.loginSuccess.emit();
    }
  }
}

