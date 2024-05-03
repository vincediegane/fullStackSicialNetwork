package com.devconnector.repository;

import com.devconnector.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    @Query("SELECT s FROM Skill s WHERE s.code = :code AND s.label = :label")
    Optional<Skill> findByCodeAndLabel(@Param("code") String code, @Param("label") String label);
}
