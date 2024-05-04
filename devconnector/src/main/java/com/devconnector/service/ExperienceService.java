package com.devconnector.service;

import com.devconnector.dto.ExperienceDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface ExperienceService {
    List<ExperienceDTO> findAll();
    List<ExperienceDTO> getProfileExperiences(Long userId);
    ExperienceDTO findById(Long id);
    ExperienceDTO addExperience(ExperienceDTO experienceDTO, Authentication connectedUser);
    ExperienceDTO updateExperience(ExperienceDTO experienceDTO, Authentication connectedUser);
    void deleteExperience(Long id);
}
