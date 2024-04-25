package com.devconnector.service;

import com.devconnector.dto.PostDTO;
import java.util.List;

public interface PostService {
    List<PostDTO> getAllPosts();
    PostDTO findById(Long id);
    PostDTO addPost(PostDTO postDTO);
    void deletePostById(Long id);
    PostDTO like(Long postId);
    PostDTO unLike(Long postId);
    PostDTO comment(Long postId);

}
