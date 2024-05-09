import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducationDto, ExperienceDto, ProfileDto, SkillDto, UserDto } from 'src/app/services/models';
import { AuthApiService, EducationControllerService, ExperienceControllerService, GithubUserRepoControllerService, ProfileControllerService, SkillControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  user!: UserDto;
  defaultAvatarUrl: string = "";
  profile!: ProfileDto;
  currentProfileId!: number;
  avatar: string = '';
  loading: boolean = false;
  experiences: ExperienceDto[] = [];
  educations: EducationDto[] = [];
  skills: SkillDto[] = [];
  repos: any[] = [];

  constructor(
    private profileService: ProfileControllerService,
    private experienceService: ExperienceControllerService,
    private educationService: EducationControllerService,
    private githubService: GithubUserRepoControllerService,
    private authService: AuthApiService,
    private skillService: SkillControllerService,
    private route: ActivatedRoute
  ) {
    this.currentProfileId = this.route.snapshot.params['id'];
  }

  get bioTitle() {
    return this.user && this.user.firstName?.toLocaleLowerCase() + "'s bio";
  }

  ngOnInit(): void {
    this.getProfile(this.currentProfileId);
  }

  get username() {
    return this.profile.githubUsername as string
  }

  getUserByProfile(profileId: number) {
    this.loading = true;
    this.authService.getUserByProfile({ profileId }).subscribe({
      next: (user) => {
        this.user = user;
        this.getAvatar(this.user.email as string);
        this.getSkillsForUser(this.user.id as number)
      },
      error: (err) => console.log(err)
    });
  }

  getProfile(id: number) {
    this.loading = true;
    this.profileService.getProfile({ id }).subscribe({
      next: (profile) => {
        this.profile = profile;
        if(this.profile) {
          this.getUserByProfile(this.profile.id as number);
          this.getProfileExperiences(this.profile.id as number);
          this.getProfileEducations(this.profile.id as number);
          this.getLastFiveGithubRepo(this.profile.githubUsername as string);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getSkillsForUser(userId: number) {
    this.skillService.getSkillByUser$Response({
      userId
    }).subscribe({
      next: (res) => {
        this.skills = res.body;
      },
      error: (err) => console.log(err)
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
  getLastFiveGithubRepo(username: string) {
    this.githubService.getGithubRepos({ username }).subscribe({
      next: repos => {
        this.repos = repos;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getAvatar(email: string) {
    this.githubService.getGravatarUrl({ email }).subscribe({
      next: (avatar: string) => {
        if(avatar.length)
          this.avatar = avatar;
        else
          this.avatar = this.githubService.defaultAvatarUrl;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
