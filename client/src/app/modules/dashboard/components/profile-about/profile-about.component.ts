import { Component, Input, OnInit } from '@angular/core';
import { ProfileDto, SkillDto, UserDto } from 'src/app/services/models';
import { AuthApiService, SkillControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css']
})
export class ProfileAboutComponent implements OnInit {
  @Input()
  profile!: ProfileDto;
  skills: SkillDto[] = [];
  loading: boolean = true;
  user!: UserDto;

  constructor(
    private skillService: SkillControllerService,
    private authService: AuthApiService,
  ) { }

  ngOnInit(): void {
    this.getUserByProfile(this.profile.id as number);
  }

  get bioTitle() {
    return this.user && this.user.firstName?.toLocaleLowerCase() + "'s bio";
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

  getUserByProfile(profileId: number) {
    this.loading = true;
    this.authService.getUserByProfile({ profileId }).subscribe({
      next: (user: UserDto) => {
        if(user) {
          this.user = user;
          this.getSkillsForUser(this.user.id as number);
        }
        this.loading = false;
      },
      error: (err) => console.log(err)
    });
  }

}
