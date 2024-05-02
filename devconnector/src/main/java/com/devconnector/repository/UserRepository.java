package com.devconnector.repository;

import com.devconnector.model.Skill;
import com.devconnector.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(@Param("email") String email);
    User findByProfileId(Long profileId);
    @Query("SELECT u.skills FROM User u WHERE u.id = ?1")
    List<Skill> findSkillsByUserId(Long userId);
}
