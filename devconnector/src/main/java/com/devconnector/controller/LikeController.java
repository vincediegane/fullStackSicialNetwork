package com.devconnector.controller;

import com.devconnector.dto.LikeDTO;
import com.devconnector.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return ResponseEntity.ok(likeService.findLikesByOnePost(postId));
    }
}
