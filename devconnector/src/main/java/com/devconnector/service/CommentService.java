package com.devconnector.service;

import com.devconnector.model.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getAllComments();
    Comment getCommentById(Long id);

    Comment save(Comment comment);
}
