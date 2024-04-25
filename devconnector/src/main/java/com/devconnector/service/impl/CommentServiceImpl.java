package com.devconnector.service.impl;

import com.devconnector.dto.CommentDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.CommentMapper;
import com.devconnector.model.Comment;
import com.devconnector.repository.CommentRepository;
import com.devconnector.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

    @Override
    public List<CommentDTO> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(comment -> commentMapper.fromComment(comment)).collect(Collectors.toList());
    }

    @Override
    public CommentDTO getCommentById(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(() -> new AppException("Comment not found.", HttpStatus.NOT_FOUND));
        return commentMapper.fromComment(comment);
    }

    @Override
    public CommentDTO addComment(CommentDTO commentDTO) {
        Comment comment = commentRepository.save(commentMapper.fromCommentDTO(commentDTO, null, null));
        return commentMapper.fromComment(comment);
    }

    @Override
    public CommentDTO updateComment(CommentDTO commentDTO) {
        return null;
    }

    @Override
    public void deleteCommentById(Long id) {

    }
}
