package com.devconnector.mapper;

import com.devconnector.dto.LikeDTO;
import com.devconnector.model.Like;
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
}