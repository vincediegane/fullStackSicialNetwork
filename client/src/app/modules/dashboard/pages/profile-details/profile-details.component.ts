import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducationDto, ExperienceDto, ProfileDto } from 'src/app/services/models';
import { EducationControllerService, ExperienceControllerService, ProfileControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile!: ProfileDto;
  currentProfileId!: number;
  loading: boolean = false;
  experiences: ExperienceDto[] = [];
  educations: EducationDto[] = [];

  constructor(
    private profileService: ProfileControllerService,
    private experienceService: ExperienceControllerService,
    private educationService: EducationControllerService,
    private route: ActivatedRoute
  ) {
    this.currentProfileId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProfile(this.currentProfileId);
  }

  get username() {
    return this.profile.githubUsername as string
  }

  getProfile(id: number) {
    this.loading = true;
    this.profileService.getProfile({ id }).subscribe({
      next: (profile) => {
        this.profile = profile;
        if(this.profile) {
          this.getProfileExperiences(this.profile.id as number);
          this.getProfileEducations(this.profile.id as number);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getProfileExperiences(profileId: number) {
    this.experienceService.getProfileExperiences({ profileId }).subscribe({
      next: res => {
        this.experiences = res;
      },
      error: err => console.log(err)
    });
  }
  getProfileEducations(profileId: number) {
    this.educationService.getProfileEducations({ profileId }).subscribe({
      next: res => {
        this.educations = res;
      },
      error: err => console.log(err)
    });
  }
}
