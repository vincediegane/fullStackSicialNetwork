import { Component, Input, OnInit } from '@angular/core';
import { GithubUserRepoControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-profile-github',
  templateUrl: './profile-github.component.html',
  styleUrls: ['./profile-github.component.css']
})
export class ProfileGithubComponent implements OnInit {
  @Input()
  username!: string;
  loading: boolean = false;
  repos: any[] = [];

  constructor(private githubService: GithubUserRepoControllerService) { }

  ngOnInit(): void {
    this.getLastFiveGithubRepo(this.username);
  }

  getLastFiveGithubRepo(username: string) {
    this.loading = true;
    this.githubService.getGithubRepos({ username }).subscribe({
      next: repos => {
        this.repos = repos;
        this.loading = false;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
