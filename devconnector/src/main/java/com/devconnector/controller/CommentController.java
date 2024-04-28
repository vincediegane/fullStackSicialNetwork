package com.devconnector.controller;

import com.devconnector.dto.CommentDTO;
import com.devconnector.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping("/")
    public List<CommentDTO> findAll() {
        return commentService.getAllComments();
    }

    @GetMapping("/{id}")
    public CommentDTO getComment(@PathVariable Long id) {
        return commentService.getCommentById(id);
    }

    @GetMapping("/posts/{postId}")
    public List<CommentDTO> getCommentsByPost(@PathVariable Long postId) {
        return commentService.getCommentsByPost(postId);
    }

    @PostMapping("/")
    public CommentDTO addComment(@RequestBody CommentDTO commentDTO, Authentication connectedUser) {
        return commentService.addComment(commentDTO, connectedUser);
    }
    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable Long commentId) {
        commentService.deleteCommentById(commentId);
        return ResponseEntity.ok("deleted");
    }
}
