package com.devconnector.service.impl;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.service.ProfileService;

import java.util.List;

public class ProfileServiceImpl implements ProfileService {
    @Override
    public List<ProfileDTO> findAll() {
        return null;
    }

    @Override
    public ProfileDTO getCurrentProfile() {
        return null;
    }

    @Override
    public ProfileDTO getProfileByUserId(Long userId) {
        return null;
    }

    @Override
    public ProfileDTO addProfile(ProfileDTO profileDTO) {
        return null;
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) {
        return null;
    }

    @Override
    public void deleteProfile(Long id) {

    }

    @Override
    public ProfileDTO addProfileExperience(ExperienceDTO experienceDTO) {
        return null;
    }

    @Override
    public ProfileDTO addProfileEducation(EducationDTO educationDTO) {
        return null;
    }
}
