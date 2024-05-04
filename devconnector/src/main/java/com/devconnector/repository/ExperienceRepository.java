package com.devconnector.repository;

import com.devconnector.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    @Query("SELECT e FROM Experience e WHERE e.profile.id = :profileId")
    List<Experience> findProfileExperiences(@Param("profileId") Long profileId);
}
