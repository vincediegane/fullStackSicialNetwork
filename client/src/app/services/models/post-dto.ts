/* tslint:disable */
/* eslint-disable */
import { UserDto } from '../models/user-dto';
export interface PostDto {
  body?: string;
  createdAt?: string;
  id?: number;
  title?: string;
  userDTO?: UserDto;
}
