package com.devconnector.service;

import com.devconnector.dto.ExperienceDTO;

import java.util.List;

public interface ExperienceService {
    List<ExperienceDTO> findAll();
    ExperienceDTO findById(Long id);
    ExperienceDTO addExperience(ExperienceDTO experienceDTO);
    ExperienceDTO updateExperience(ExperienceDTO experienceDTO);
    void deleteExperience(Long id);
}
