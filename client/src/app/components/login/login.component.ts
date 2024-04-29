import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  handleLogin() {
    let email = this.userFormGroup.value.email;
    let password = this.userFormGroup.value.password;

    this.authService.login(email, password).subscribe({
      next: (appUser) => {
        this.authService.authenticateUser(appUser).subscribe({
          next: () => {
            this.router.navigateByUrl('/admin/home');
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

}
