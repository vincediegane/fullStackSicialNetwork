import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseDto } from 'src/app/services/models';
import { AuthApiService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";
  userFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  login() {
    let { email, password } = this.userFormGroup.value;

    this.authService.authenticate({
      body: { email, password }
    }).subscribe({
      next: (res: AuthResponseDto) => {
        this.tokenService.token = res.token as string;
        this.router.navigateByUrl("/home");
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
