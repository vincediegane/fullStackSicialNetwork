package com.devconnector.mapper;

import com.devconnector.dto.PostDTO;
import com.devconnector.model.Post;
import org.springframework.stereotype.Service;

@Service
public class PostMapper {
    private final UserMapper userMapper;

    public PostMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public Post fromPostDTO(PostDTO postDTO) {
        return Post.builder()
            .id(postDTO.getId())
            .body(postDTO.getBody())
            .title(postDTO.getTitle())
            .createdAt(postDTO.getCreatedAt())
            .user(userMapper.fromUserDTO(postDTO.getUserDTO()))
            .build();
    }

    public PostDTO fromPost(Post post) {
        return PostDTO.builder()
            .id(post.getId())
            .body(post.getBody())
            .title(post.getTitle())
            .createdAt(post.getCreatedAt())
            .userDTO(userMapper.fromUser(post.getUser()))
            .build();
    }
}
