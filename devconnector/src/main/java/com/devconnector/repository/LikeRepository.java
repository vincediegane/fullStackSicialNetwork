package com.devconnector.repository;

import com.devconnector.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    List<Like> findByPostId(Long postId);
    boolean existsByPostIdAndUserId(Long postId, Long userId);
    Like findByPostIdAndUserId(Long postId, Long id);
}
