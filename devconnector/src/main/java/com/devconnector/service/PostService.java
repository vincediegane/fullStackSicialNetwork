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
    PostDTO like(Long postId, Authentication connectedUser);
    PostDTO unlike(Long postId, Authentication connectedUser);
    PostDTO comment(Long postId, Authentication connectedUser);
}
