import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDto, SkillDto, UserDto } from 'src/app/services/models';
import { AuthApiService, SkillControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input()
  profile!: ProfileDto | any;
  user!: UserDto;
  skills: SkillDto[] = [];
  loading: boolean = false;
  
  constructor(
    private skillService: SkillControllerService,
    private authService: AuthApiService,
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
    this.authService.getUserByProfile({
      profileId
    }).subscribe({
      next: (user) => {
        this.user = user;
        this.getSkillsForUser(this.user.id as number);
        this.loading = false;
      },
      error: (err) => console.log(err)
    });
  }

  goToProfileDetails() {
    this.router.navigateByUrl("/");
  }

}
