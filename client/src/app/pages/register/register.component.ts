import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestDto } from 'src/app/services/models';
import { AuthApiService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMsg: string = "";

  constructor(private fb: FormBuilder, private authService: AuthApiService, private router: Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control('')
    });
  }

  register() {
    this.errorMsg = "";
    let { email, password, firstName, lastName } = this.userFormGroup.value;

    this.authService.register({
      body: { email, password, firstName, lastName }
    }).subscribe({
      next: (res) => this.router.navigateByUrl("/login"),
      error: (err) => console.log(err)
    });
  }
}
