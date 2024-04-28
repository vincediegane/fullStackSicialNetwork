package com.devconnector.service;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ProfileDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface EducationService {
    List<EducationDTO> findAll();
    EducationDTO findById(Long id);
    EducationDTO addEducation(EducationDTO educationDTO, Authentication connectedUser);
    EducationDTO updateEducation(EducationDTO educationDTO, Authentication connectedUser);
    void deleteEducation(Long id);
}
