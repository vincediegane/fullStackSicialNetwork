package com.devconnector.controller;

import com.devconnector.dto.LikeDTO;
import com.devconnector.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/likes")
@AllArgsConstructor
public class LikeController {
    private final LikeService likeService;

    @GetMapping("/")
    public List<LikeDTO> findAll() {
        return likeService.findAll();
    }

    @GetMapping("/{likeId}")
    public LikeDTO findById(@PathVariable Long likeId) {
        return likeService.findById(likeId);
    }

    @GetMapping("/post/{postId}")
    public List<LikeDTO> findLikeByPost(@PathVariable Long postId) {
        return likeService.findLikesByPost(postId);
    }

    @GetMapping("/post/{postId}/count")
    public ResponseEntity<?> findLikeByOnePost(@PathVariable Long postId) {
        long count = likeService.findLikesByOnePost(postId).stream().count();
        return ResponseEntity.ok(count);
    }
    @PostMapping("/{postId}/like")
    public ResponseEntity<String> likeOrUnlikePost(@PathVariable Long postId, Authentication connectedUser) {
        return ResponseEntity.ok(likeService.likeOrUnlikePost(postId, connectedUser));
    }
}
