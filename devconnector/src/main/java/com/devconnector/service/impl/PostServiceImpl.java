package com.devconnector.service.impl;

import com.devconnector.dto.PostDTO;
import com.devconnector.dto.PostRequestDTO;
import com.devconnector.dto.UserDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.PostMapper;
import com.devconnector.mapper.UserMapper;
import com.devconnector.model.Like;
import com.devconnector.model.Post;
import com.devconnector.model.User;
import com.devconnector.repository.LikeRepository;
import com.devconnector.repository.PostRepository;
import com.devconnector.service.LikeService;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final LikeRepository likeRepository;
    private final UserMapper userMapper;
    private final LikeService likeService;

    @Override
    public PostDTO findById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new AppException("Post not found", HttpStatus.NOT_FOUND));
        return postMapper.fromPost(post);
    }

    @Override
    public PostDTO addPost(PostRequestDTO postRequestDTO, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Post post = postMapper.toPost(postRequestDTO);
        post.setUser(user);
        post.setCreatedAt(Instant.now());
        postRepository.save(post);
        return postMapper.fromPost(post);
    }

    @Override
    public void deletePostById(Long id) {
        postRepository.deleteById(id);
    }
    @Override
    public PostDTO updatePost(PostRequestDTO postRequestDTO, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Post post = postMapper.toPost(postRequestDTO);
        post.setUser(user);
        postRepository.save(post);
        return postMapper.fromPost(post);
    }

    @Override
    public List<PostDTO> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(post -> postMapper.fromPost(post)).toList();
    }
}
