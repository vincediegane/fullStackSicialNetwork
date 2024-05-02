import { Component, Input, OnInit } from '@angular/core';
import { ProfileDto } from 'src/app/services/models';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.css']
})
export class ProfileTopComponent implements OnInit {
  @Input()
  profile!: ProfileDto;

  constructor() { }

  ngOnInit(): void {
  }

}
