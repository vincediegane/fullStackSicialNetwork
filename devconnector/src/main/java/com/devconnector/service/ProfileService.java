package com.devconnector.service;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface ProfileService {
    List<ProfileDTO> findAll();
    ProfileDTO getProfile(Long id);
    ProfileDTO getCurrentProfile(Authentication connectedUser);
    ProfileDTO getProfileByUserId(Long userId);
    ProfileDTO addProfile(ProfileDTO profileDTO, Authentication connectedUser);
    ProfileDTO updateProfile(ProfileDTO profileDTO, Authentication connectedUser);
    void deleteProfile(Long id);
    ProfileDTO addProfileExperience(ExperienceDTO experienceDTO);
    ProfileDTO addProfileEducation(EducationDTO educationDTO);
}
