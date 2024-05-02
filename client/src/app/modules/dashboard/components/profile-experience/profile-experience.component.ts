import { Component, Input, OnInit } from '@angular/core';
import { ExperienceDto } from 'src/app/services/models';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css']
})
export class ProfileExperienceComponent implements OnInit {
  @Input()
  experience: ExperienceDto | any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
