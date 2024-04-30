import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  handleLogin() {
    
  }

}
