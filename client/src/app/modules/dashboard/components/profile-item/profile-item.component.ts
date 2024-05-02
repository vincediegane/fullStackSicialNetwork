import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDto, SkillDto, UserDto } from 'src/app/services/models';
import { AuthApiService, GithubUserRepoControllerService, SkillControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input()
  profile!: ProfileDto | any;
  user: UserDto = { id: 0, email: '', firstName: '', lastName: '' };
  skills: SkillDto[] = [];
  loading: boolean = false;
  avatar: string | any;
  userEmail: string = this.githubService.defaultAvatar;
  
  constructor(
    private skillService: SkillControllerService,
    private authService: AuthApiService,
    private githubService: GithubUserRepoControllerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserByProfile(this.profile.id);
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
          this.userEmail = user.email as string;
          this.getSkillsForUser(this.user.id as number);
          this.getAvatar(this.userEmail);
        }
        this.loading = false;
      },
      error: (err) => console.log(err)
    });
  }

  getAvatar(email: string) {
    this.githubService.getGravatarUrl({ email }).subscribe({
      next: (avatar: string) => {
        this.avatar = avatar;
        console.log(avatar);
      },
      error: (err) => {
        debugger
        console.log(err);
        this.avatar = this.githubService.defaultAvatar;
      }
    });
  }

  goToProfileDetails() {
    this.router.navigateByUrl("/");
  }

}
