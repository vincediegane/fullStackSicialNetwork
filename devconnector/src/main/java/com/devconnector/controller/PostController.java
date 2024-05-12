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

    @GetMapping("/{id}")
    public PostDTO getPostById(@PathVariable Long id) {
        return postService.findById(id);
    }

    @PostMapping("/")
    public PostDTO addPost(@RequestBody PostRequestDTO postRequestDTO, Authentication connectedUser) {
        return postService.addPost(postRequestDTO, connectedUser);
    }

    @PutMapping("/{id}")
    public PostDTO updatePost(@PathVariable Long id, @RequestBody PostRequestDTO postRequestDTO, Authentication connectedUser) {
        postRequestDTO.setId(id);
        return postService.updatePost(postRequestDTO, connectedUser);
    }

    @PostMapping("/like/{postId}")
    public ResponseEntity<String> likePost(@PathVariable Long postId, Authentication connectedUser) {
        postService.like(postId, connectedUser);
        return ResponseEntity.ok("Liked");
    }

    @PutMapping("/unlike/{postId}")
    public ResponseEntity<String> unlikePost(@PathVariable Long postId, Authentication connectedUser) {
        postService.unlike(postId, connectedUser);
        return ResponseEntity.ok("UnLiked");
    }

    @PostMapping("/likeOrUnlike/{postId}")
    public ResponseEntity<String> likeOrUnlikePost(@PathVariable Long postId, Authentication connectedUser) {
        postService.likeORunlike(postId, connectedUser);
        return ResponseEntity.ok("Unliked");
    }
}
