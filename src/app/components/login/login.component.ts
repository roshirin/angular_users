import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
  });

  errors = {
    email: false,
    password: false,
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/users']);
    }

    if (this.email.invalid) {
      this.errors.email = true;
    }

    if (this.password.invalid) {
      this.errors.password = true;
    }
  }

  onInput(field: 'email' | 'password') {
    this.errors[field] = false;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }
}
