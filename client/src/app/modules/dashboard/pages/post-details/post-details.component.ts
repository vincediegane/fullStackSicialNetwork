import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDto } from 'src/app/services/models';
import { PostControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId!: number;
  currentPost!: PostDto;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostControllerService) {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPost(this.postId as number);
  }

  getPost(id: number) {
    this.loading = true;
    this.postService.getPostById({ id }).subscribe({
      next: res => {
        this.currentPost = res;
        this.loading = false;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
