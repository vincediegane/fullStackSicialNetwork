import { Component, Input, OnInit } from '@angular/core';
import { ProfileDto, UserDto } from 'src/app/services/models';
import { AuthApiService, GithubUserRepoControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.css']
})
export class ProfileTopComponent implements OnInit {
  @Input()
  profile!: ProfileDto;
  loading: boolean = false;
  defaultAvatarUrl: string =this.githubService.defaultAvatarUrl;
  name: String = "";
  constructor(private authService: AuthApiService, private githubService: GithubUserRepoControllerService) { }

  ngOnInit(): void {
    this.getUserByProfile(this.profile.id as number);
  }

  getUserByProfile(profileId: number) {
    this.loading = true;
    this.authService.getUserByProfile({ profileId }).subscribe({
      next: (user) => {
        if(user) {
          this.name = user.firstName + " " + user.lastName;
        }
        this.loading = false;
      },
      error: (err) => console.log(err)
    });
  }

}
