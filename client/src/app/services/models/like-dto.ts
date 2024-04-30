/* tslint:disable */
/* eslint-disable */
import { PostDto } from '../models/post-dto';
import { UserDto } from '../models/user-dto';
export interface LikeDto {
  id?: number;
  likedAt?: string;
  postDTO?: PostDto;
  userDTO?: UserDto;
}
