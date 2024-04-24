package com.devconnector.service;

import com.devconnector.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    Optional<Post> findById(Long id);
    Post save(Post post);

    void delete(Post post);

    List<Post> getAllPosts();
}
