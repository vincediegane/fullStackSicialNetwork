import { Component, Input, OnInit } from '@angular/core';
import { EducationDto } from 'src/app/services/models';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {
  @Input()
  education: EducationDto | any;

  constructor() { }

  ngOnInit(): void {
  }

}
