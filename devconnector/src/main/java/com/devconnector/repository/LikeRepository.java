package com.devconnector.repository;

import com.devconnector.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    List<Like> findByPostId(Long postId);
    boolean existsByPostIdAndUserId(Long postId, Long userId);
    @Query("SELECT l FROM Post p LEFT JOIN p.likes l on p.id = l.id where p.id = :id")
    List<Like> findLikesByPost(@Param("id") Long id);
    @Query("SELECT l from Post p LEFT JOIN p.likes l LEFT JOIN p.user group by :postId")
    Like findLikeByUserByPost(@Param("postId") Long postId);
    Like findByPostIdAndUserId(Long postId, Long id);
}
