import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/app/services/models';
import { CommentControllerService, GithubUserRepoControllerService, LikeControllerService, PostControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  currentPostId!: number;
  @Input()
  post!: PostDto;
  postLikesCount!: number;
  avatarUrl!: string;
  postCommentsCount!: number;
  
  constructor(
    private githubService: GithubUserRepoControllerService,
    private commentService: CommentControllerService,
    private likeService: LikeControllerService
  ) {
  }

  ngOnInit(): void {
    if(this.post) {
      this.getGravatarUrl(this.post.userDTO?.email as string);
      this.getPostLikesCount(this.post.id);
      this.getPostCommentsCount(this.post.id);
    }
  }

  getGravatarUrl(email: string) {
    this.githubService.getGravatarUrl({ email }).subscribe({
      next: res => {
        if(res.length) this.avatarUrl = res
        else this.avatarUrl = this.githubService.defaultAvatarUrl;
      },
      error: err => console.log(err)
    });
  }

  getPostLikesCount(postId: any) {
    this.likeService.findLikeByOnePost({ postId }).subscribe({
      next: (res) => {
        this.postLikesCount = parseInt(res as string);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  getPostCommentsCount(postId: any) {
    this.commentService.getCommentsByPost({ postId }).subscribe({
      next: (res) => {
        this.postCommentsCount = res.length;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  likeOrUnlikePost(postId: any) {
    this.likeService.likeOrUnlikePost({ postId }).subscribe({
      next: () => {
        this.getPostLikesCount(postId);
      },
      error: err => {
        console.error(err.error);
      }
    })
  }
}
