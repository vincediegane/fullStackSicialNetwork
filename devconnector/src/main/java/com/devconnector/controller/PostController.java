package com.devconnector.controller;

import com.devconnector.dto.PostDTO;
import com.devconnector.dto.PostRequestDTO;
import com.devconnector.service.LikeService;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/posts")
public class PostController {
    private final PostService postService;
    private final LikeService likeService;

    @GetMapping("/")
    public List<PostDTO> getAllPost() {
        return postService.getAllPosts();
    }

    @GetMapping("/{postId}")
    public PostDTO getPostById(@PathVariable Long postId) {
        return postService.findById(postId);
    }

    @PostMapping("/")
    public PostDTO addPost(@RequestBody PostRequestDTO postRequestDTO, Authentication connectedUser) {
        return postService.addPost(postRequestDTO, connectedUser);
    }

    @PutMapping("/{postId}")
    public PostDTO updatePost(@PathVariable Long postId, @RequestBody PostRequestDTO postRequestDTO, Authentication connectedUser) {
        postRequestDTO.setId(postId);
        return postService.updatePost(postRequestDTO, connectedUser);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId) {
        postService.deletePostById(postId);
        return ResponseEntity.ok("deleted");
    }
}
