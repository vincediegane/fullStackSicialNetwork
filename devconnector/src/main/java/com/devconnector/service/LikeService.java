package com.devconnector.service;

import com.devconnector.dto.LikeDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface LikeService {
    List<LikeDTO> findAll();
    List<LikeDTO> findLikesByPost(Long postId);
    LikeDTO findById(Long likeId);
    List<LikeDTO> findLikesByOnePost(Long postId);
    String likeOrUnlikePost(Long postId, Authentication connectedUser);
}
