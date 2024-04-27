package com.devconnector.controller;

import com.devconnector.dto.PostDTO;
import com.devconnector.dto.PostRequestDTO;
import com.devconnector.model.Post;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/posts")
public class PostRestController {
    private final PostService postService;

    @GetMapping("/")
    public List<PostDTO> getAllPost() {
        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public PostDTO getPostById(@PathVariable Long id) {
        return postService.findById(id);
    }

    @PostMapping("/")
    public PostDTO addPost(@RequestBody PostRequestDTO postRequestDTO, Authentication connectedUser) {
        return postService.addPost(postRequestDTO, connectedUser);
    }

    @PutMapping("/like/{postId}")
    public PostDTO likePost(@PathVariable Long postId, Authentication connectedUser) {
        return postService.like(postId, connectedUser);
    }

    @PutMapping("/unlike/{postId}")
    public PostDTO unlikePost(@PathVariable Long postId, Authentication connectedUser) {
        return postService.unlike(postId, connectedUser);
    }
}
