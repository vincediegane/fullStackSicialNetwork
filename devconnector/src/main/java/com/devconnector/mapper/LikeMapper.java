package com.devconnector.mapper;

import com.devconnector.dto.LikeDTO;
import com.devconnector.dto.PostDTO;
import com.devconnector.dto.UserDTO;
import com.devconnector.model.Like;
import com.devconnector.model.Post;
import com.devconnector.model.User;
import org.springframework.stereotype.Service;

@Service
public class LikeMapper {
    public Like fromLikeDTO(LikeDTO likeDTO) {
        return Like.builder()
            .id(likeDTO.getId())
            .likedAt(likeDTO.getLikedAt())
            .build();
    }

    public LikeDTO fromLike(Like like) {
        return LikeDTO.builder()
            .id(like.getId())
            .likedAt(like.getLikedAt())
            .build();
    }

    public LikeDTO fromLike(Like like, UserDTO userDTO) {
        return LikeDTO.builder()
            .id(like.getId())
            .likedAt(like.getLikedAt())
            .userDTO(userDTO)
            .build();
    }
}
