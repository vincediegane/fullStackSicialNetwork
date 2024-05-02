import { Component, OnInit } from '@angular/core';
import { ProfileDto } from 'src/app/services/models';
import { ProfileControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  loading: boolean = false;
  profiles: ProfileDto[] = [
    {
      "id": 1,
      "company": "Kopar Express",
      "website": "koparexpress.com",
      "location": "Mariste",
      "status": "active",
      "bio": "I'am a fullstack java angular developper",
      "githubUsername": "vincediegane",
      "createdAt": "2024-05-01T19:28:43.137593Z"
    },
    {
      "id": 2,
      "company": "Sonatel",
      "website": "sonatel.com",
      "location": "Cite keur gorgui",
      "status": "active",
      "bio": "I'am a fullstack java angular developper",
      "githubUsername": "username",
      "createdAt": "2024-05-01T19:33:15.258104Z"
    }
  ];

  constructor(private profileService: ProfileControllerService) { }

  ngOnInit(): void {
    // this.loadProfiles();
  }

  loadProfiles() {
    this.loading = true;
    this.profileService.getProfiles().subscribe({
      next: (profiles) => {
        this.profiles = profiles;
        console.log(profiles);
      },
      error: (err) => console.log(err)
    });
  }

}
