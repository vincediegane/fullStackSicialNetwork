package com.devconnector.service;

import com.devconnector.dto.LikeDTO;
import java.util.List;

public interface LikeService {
    List<LikeDTO> findAll();
    List<LikeDTO> findLikesByPost(Long postId);
    LikeDTO findById(Long likeId);
    void unlike(Long likeId);
    List<LikeDTO> findLikesByOnePost(Long postId);
    LikeDTO findLikeByUserByPost(Long postID);
}
