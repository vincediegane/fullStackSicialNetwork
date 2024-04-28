package com.devconnector.service.impl;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.ProfileMapper;
import com.devconnector.mapper.UserMapper;
import com.devconnector.model.Profile;
import com.devconnector.model.User;
import com.devconnector.repository.ProfileRepository;
import com.devconnector.service.ProfileService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final ProfileRepository profileRepository;
    private final ProfileMapper profileMapper;
    private final UserMapper userMapper;

    @Override
    public List<ProfileDTO> findAll() {
        List<Profile> profiles = profileRepository.findAll();
        return profiles.stream().map(profileMapper::fromProfile).toList();
    }

    @Override
    public ProfileDTO getProfile(Long id) {
        Profile profile = profileRepository.findById(id).orElseThrow(() -> new AppException("Profile not found", HttpStatus.NOT_FOUND));
        return profileMapper.fromProfile(profile);
    }

    @Override
    public ProfileDTO getCurrentProfile(Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Profile profile = profileRepository.findByUserId(user.getId());
        if(profile == null) {
            throw new AppException("Profile not found", HttpStatus.NOT_FOUND);
        }
        return profileMapper.fromProfile(profile);
    }

    @Override
    public ProfileDTO getProfileByUserId(Long userId) {
        Profile profile = profileRepository.findByUserId(userId);
        if(profile == null) {
            throw new AppException("Profile not found", HttpStatus.NOT_FOUND);
        }
        return profileMapper.fromProfile(profile);
    }

    @Override
    public ProfileDTO addProfile(ProfileDTO profileDTO, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        if(user.getProfile() != null) {
            throw new AppException("User already have a profile", HttpStatus.BAD_REQUEST);
        }
        Profile profile = profileMapper.fromProfileDTO(profileDTO);
        profile.setUser(user);
        profile.setCreatedAt(Instant.now());
        Profile savedProfile = profileRepository.save(profile);
        return profileMapper.fromProfile(savedProfile);
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Profile profile = profileMapper.fromProfileDTO(profileDTO, userMapper.fromUser(user));
        Profile savedProfile = profileRepository.save(profile);
        return profileMapper.fromProfile(savedProfile);
    }

    @Override
    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
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
