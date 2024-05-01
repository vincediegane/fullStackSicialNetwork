import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequestDto, AuthResponseDto } from 'src/app/services/models';
import { AuthApiService } from 'src/app/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest: AuthRequestDto = { email: '', password: '' };
  errorMessage: string = "";
  userFormGroup!: FormGroup;
  authResponse!: string | undefined;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthApiService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  login() {
    this.authRequest.email = this.userFormGroup.value.email;
    this.authRequest.password = this.userFormGroup.value.password;


    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res: AuthResponseDto) => {
        this.authResponse = res.token;
        console.log(this.authResponse);
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
