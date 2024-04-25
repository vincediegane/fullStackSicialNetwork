package com.devconnector.service;

import com.devconnector.dto.EducationDTO;
import java.util.List;

public interface EducationService {
    List<EducationDTO> findAll();
    EducationDTO findById(Long id);
    EducationDTO addExperience(EducationDTO experienceDTO);
    EducationDTO updateExperience(EducationDTO experienceDTO);
    void deleteExperience(Long id);
}
