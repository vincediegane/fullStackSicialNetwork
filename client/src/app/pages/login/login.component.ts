import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";
  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthApiService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  login() {
    let email = this.userFormGroup.value.email;
    let password = this.userFormGroup.value.password;

    this.authService.authenticate({
      body: {email, password}
    }).subscribe({
      next: (res) => {
        debugger
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  register() {
    this.router.navigateByUrl("/register");
  }

}
