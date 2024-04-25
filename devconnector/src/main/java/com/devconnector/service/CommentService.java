package com.devconnector.service;

import com.devconnector.dto.CommentDTO;

import javax.xml.stream.events.Comment;
import java.util.List;

public interface CommentService {
    List<CommentDTO> getAllComments();
    CommentDTO getCommentById(Long id);
    CommentDTO addComment(CommentDTO commentDTO);
    CommentDTO updateComment(CommentDTO commentDTO);
    void deleteCommentById(Long id);
}
