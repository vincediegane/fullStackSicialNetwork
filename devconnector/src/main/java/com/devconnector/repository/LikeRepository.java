package com.devconnector.repository;

import com.devconnector.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    List<Like> findByPostId(Long postId);
    @Query("SELECT COUNT(l) FROM Post p LEFT JOIN p.likes l GROUP BY :id")
    int findLikesByPost(@Param("id") Long id);
}
