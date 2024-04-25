package com.devconnector.service.impl;

import com.devconnector.dto.PostDTO;
import com.devconnector.model.Post;
import com.devconnector.repository.PostRepository;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public PostDTO findById(Long id) {
        return null;
//        return postRepository.findById(id);
    }

    @Override
    public PostDTO addPost(PostDTO postDTO) {
//        return postRepository.save(post);
        return null;
    }

    @Override
    public void deletePostById(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public PostDTO like(Long postId) {
        return null;
    }

    @Override
    public PostDTO unLike(Long postId) {
        return null;
    }

    @Override
    public PostDTO comment(Long postId) {
        return null;
    }

    @Override
    public List<PostDTO> getAllPosts() {
//        return postRepository.findAll();
        return null;
    }
}
