import { Component, OnInit } from '@angular/core';
import { ProfileDto } from 'src/app/services/models';
import { ProfileControllerService, SkillControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  loading: boolean = false;
  profiles: ProfileDto[] = [];

  constructor(private profileService: ProfileControllerService) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles() {
    this.loading = true;
    this.profileService.getProfiles().subscribe({
      next: (profiles) => {
        this.profiles = profiles;
      },
      error: (err) => console.log(err)
    });
  }
}
