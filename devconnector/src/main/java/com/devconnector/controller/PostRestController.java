package com.devconnector.controller;

import com.devconnector.dto.PostDTO;
import com.devconnector.dto.PostRequestDTO;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> likePost(@PathVariable Long postId, Authentication connectedUser) {
        postService.like(postId, connectedUser);
        return ResponseEntity.ok("Liked");
    }

    @PutMapping("/unlike/{postId}")
    public ResponseEntity<String> unlikePost(@PathVariable Long postId, Authentication connectedUser) {
        postService.unlike(postId, connectedUser);
        return ResponseEntity.ok("Unliked");
    }
}
