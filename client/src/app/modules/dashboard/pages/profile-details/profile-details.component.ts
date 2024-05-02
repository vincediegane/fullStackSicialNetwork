import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDto } from 'src/app/services/models';
import { ProfileControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile!: ProfileDto;
  currentProfileId!: number;
  loading: boolean = false;

  constructor(private profileService: ProfileControllerService, private route: ActivatedRoute) {
    this.currentProfileId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProfile(this.currentProfileId);
  }

  getProfile(id: number) {
    this.loading = true;
    this.profileService.getProfile({id}).subscribe({
      next: (profile) => {
        this.profile = profile;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
