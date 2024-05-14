package com.devconnector.service.impl;

import com.devconnector.dto.LikeDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.LikeMapper;
import com.devconnector.model.Like;
import com.devconnector.model.Post;
import com.devconnector.model.User;
import com.devconnector.repository.LikeRepository;
import com.devconnector.repository.PostRepository;
import com.devconnector.service.LikeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class LikeServiceImpl implements LikeService {
    private final LikeRepository likeRepository;
    private final LikeMapper likeMapper;
    private final PostRepository postRepository;

    @Override
    public List<LikeDTO> findAll() {
        List<Like> likes = likeRepository.findAll();
        return likes.stream().map(likeMapper::fromLike).toList();
    }

    @Override
    public List<LikeDTO> findLikesByPost(Long postId) {
        List<Like> likes = likeRepository.findByPostId(postId);
        return likes.stream().map(likeMapper::fromLike).toList();
    }

    @Override
    public LikeDTO findById(Long likeId) {
        Like like = likeRepository.findById(likeId).orElseThrow(() -> new AppException("Like not found", HttpStatus.NOT_FOUND));
        return likeMapper.fromLike(like);
    }

    @Override
    public List<LikeDTO> findLikesByOnePost(Long postId) {
        List<Like> likes = likeRepository.findLikesByPost(postId);
        return likes.stream().map(likeMapper::fromLike).toList();
    }

    @Override
    public String likeOrUnlikePost(Long postId, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Post post = postRepository.findById(postId).orElseThrow(() -> new AppException("Post not Found.", HttpStatus.NOT_FOUND));

        if(likeRepository.existsByPostIdAndUserId(postId, user.getId())) {
            likeRepository.delete(likeRepository.findByPostIdAndUserId(postId, user.getId()));
            return "Unliked";
        } else {
            likeRepository.save(Like.builder().post(post).user(user).likedAt(Instant.now()).build());
            return "Liked";
        }
    }
}
