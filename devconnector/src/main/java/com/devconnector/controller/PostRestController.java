package com.devconnector.controller;

import com.devconnector.model.Post;
import com.devconnector.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/posts")
public class PostRestController {
//    private final PostService postService;

//    @GetMapping("/")
//    public List<Post> getAllPost() {
//        return postService.getAllPosts();
//    }

//    @GetMapping("/{id}")
//    public Post getPostById(@PathVariable Long id) {
//        return postService.findById(id).get();
//    }

//    @PostMapping("/")
//    public Post addPost(@RequestBody Post post) {
//        return postService.save(post);
//    }
}
