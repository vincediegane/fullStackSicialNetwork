package com.devconnector.service;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import java.util.List;

public interface ProfileService {
    List<ProfileDTO> findAll();
    ProfileDTO getCurrentProfile();
    ProfileDTO getProfileByUserId(Long userId);
    ProfileDTO addProfile(ProfileDTO profileDTO);
    ProfileDTO updateProfile(ProfileDTO profileDTO);
    void deleteProfile(Long id);
    ProfileDTO addProfileExperience(ExperienceDTO experienceDTO);
    ProfileDTO addProfileEducation(EducationDTO educationDTO);
}
