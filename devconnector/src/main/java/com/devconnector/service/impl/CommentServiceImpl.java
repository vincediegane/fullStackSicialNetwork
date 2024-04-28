package com.devconnector.service.impl;

import com.devconnector.dto.CommentDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.CommentMapper;
import com.devconnector.mapper.PostMapper;
import com.devconnector.model.Comment;
import com.devconnector.model.Post;
import com.devconnector.model.User;
import com.devconnector.repository.CommentRepository;
import com.devconnector.service.CommentService;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final PostMapper postMapper;
    private final PostService postService;

    @Override
    public List<CommentDTO> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(commentMapper::fromComment).collect(Collectors.toList());
    }

    @Override
    public CommentDTO getCommentById(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(() -> new AppException("Comment not found.", HttpStatus.NOT_FOUND));
        return commentMapper.fromComment(comment);
    }

    @Override
    public CommentDTO addComment(CommentDTO commentDTO, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        
        Post post = postMapper.fromPostDTO(postService.findById(Long.parseLong(commentDTO.getPostId())));

        if(post == null) {
            throw new AppException("Post not found", HttpStatus.NOT_FOUND);
        }

        Comment savedComment = commentRepository.save(commentMapper.fromCommentDTO(commentDTO, post, user));

        return commentMapper.fromComment(savedComment);
    }

    @Override
    public CommentDTO updateComment(CommentDTO commentDTO) {
        return null;
    }

    @Override
    public void deleteCommentById(Long id) {

    }

    @Override
    public List<CommentDTO> getCommentsByPost(Long postId) {
        List<Comment> comments = commentRepository.findByPostId(postId);
        return comments.stream().map(commentMapper::fromComment).toList();
    }
}
