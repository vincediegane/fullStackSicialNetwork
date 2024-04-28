package com.devconnector.service.impl;

import com.devconnector.dto.LikeDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.LikeMapper;
import com.devconnector.model.Like;
import com.devconnector.repository.LikeRepository;
import com.devconnector.service.LikeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class LikeServiceImpl implements LikeService {
    private final LikeRepository likeRepository;
    private LikeMapper likeMapper;

    @Override
    public List<LikeDTO> findAll() {
        List<Like> likes = likeRepository.findAll();
        return likes.stream().map(like -> likeMapper.fromLike(like)).toList();
    }

    @Override
    public List<LikeDTO> findLikesByPost(Long postId) {
        List<Like> likes = likeRepository.findByPostId(postId);
        return likes.stream().map(like -> likeMapper.fromLike(like)).toList();
    }

    @Override
    public LikeDTO findById(Long likeId) {
        Like like = likeRepository.findById(likeId).orElseThrow(() -> new AppException("Like not found", HttpStatus.NOT_FOUND));
        return likeMapper.fromLike(like);
    }

    @Override
    public void unlike(Long likeId) {
        Like like = likeRepository.findById(likeId).orElseThrow(() -> new AppException("Like not found", HttpStatus.NOT_FOUND));
        likeRepository.deleteById(likeId);
    }
}
