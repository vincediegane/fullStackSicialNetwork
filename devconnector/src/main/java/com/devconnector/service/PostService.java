package com.devconnector.service;

import com.devconnector.dto.PostDTO;
import com.devconnector.dto.PostRequestDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface PostService {
    List<PostDTO> getAllPosts();
    PostDTO findById(Long id);
    PostDTO addPost(PostRequestDTO postRequestDTO, Authentication connectedUser);
    void deletePostById(Long id);
    void like(Long postId, Authentication connectedUser);
    PostDTO updatePost(PostRequestDTO postRequestDTO, Authentication connectedUser);
}
