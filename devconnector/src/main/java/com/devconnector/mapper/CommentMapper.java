package com.devconnector.mapper;

import com.devconnector.dto.CommentDTO;
import com.devconnector.model.Comment;
import com.devconnector.model.Post;
import com.devconnector.model.User;
import org.springframework.stereotype.Service;

@Service
public class CommentMapper {
    public Comment fromCommentDTO(CommentDTO commentDTO, Post post, User user) {
        return Comment.builder()
            .id(commentDTO.getId())
            .body(commentDTO.getBody())
            .createdAt(commentDTO.getCreatedAt())
            .post(post)
            .user(user)
            .build();
    }

    public CommentDTO fromComment(Comment comment) {
        return CommentDTO.builder()
            .id(comment.getId())
            .body(comment.getBody())
            .createdAt(comment.getCreatedAt())
            .postId(comment.getPost().getId().toString())
            .userId(comment.getUser().getId().toString())
            .build();
    }
}
