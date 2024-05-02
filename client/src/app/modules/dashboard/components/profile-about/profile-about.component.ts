import { Component, Input, OnInit } from '@angular/core';
import { ProfileDto } from 'src/app/services/models';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css']
})
export class ProfileAboutComponent implements OnInit {
  @Input()
  profile!: ProfileDto;

  constructor() { }

  ngOnInit(): void {
  }

}
