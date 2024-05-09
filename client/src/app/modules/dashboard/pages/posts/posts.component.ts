import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/app/services/models';
import { PostControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  loading: boolean = false;
  posts: PostDto[] = [];

  constructor(private postService: PostControllerService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this.postService.getAllPost().subscribe({
      next: (res) => {
        this.posts = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addPost(post: PostDto) {
    const { title, body } = post;
    this.postService.addPost({ body: { title, body } }).subscribe({
      next: (res) => {
        this.posts.push(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
