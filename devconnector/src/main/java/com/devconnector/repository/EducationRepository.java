package com.devconnector.repository;

import com.devconnector.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education, Long> {
    @Query("SELECT e FROM Education e WHERE e.profile.id = :profileId")
    List<Education> findProfileEducations(@Param("profileId") Long profileId);
}
