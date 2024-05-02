import { Component, Input, OnInit } from '@angular/core';
import { ProfileDto } from 'src/app/services/models';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input()
  profile!: ProfileDto;
  skills: any[] = [];
  // profile: ProfileDto = { id: 0, bio: '', company: '', createdAt: '', githubUsername: '',  location: '', status: '', website: '' };
  
  constructor() { }

  ngOnInit(): void {
  }

  getProfile() {}

}
