package com.devconnector.repository;

import com.devconnector.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
/*    SELECT COUNT(l.like_id) FROM POST p LEFT JOIN "_LIKE" l GROUP BY l.LIKE_ID
    SELECT * FROM "_LIKE" L WHERE L.LIKE_ID = 1
    select * from POST p left join "_LIKE" l on p.post_id=l.post_id group by l.like_id
*/
    List<Like> findByPostId(Long postId);
    @Query("SELECT l FROM Post p LEFT JOIN p.likes l on p.id = l.id where p.id = :id")
    List<Like> findLikesByPost(@Param("id") Long id);
    @Query("SELECT l from Post p LEFT JOIN p.likes l LEFT JOIN p.user group by :postId")
    Like findLikeByUserByPost(@Param("postId") Long postId);
}
