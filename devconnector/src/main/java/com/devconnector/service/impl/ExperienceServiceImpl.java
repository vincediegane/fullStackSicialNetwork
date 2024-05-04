package com.devconnector.service.impl;

import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.ExperienceMapper;
import com.devconnector.model.Education;
import com.devconnector.model.Experience;
import com.devconnector.repository.ExperienceRepository;
import com.devconnector.service.ExperienceService;
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
public class ExperienceServiceImpl implements ExperienceService {
    private final ExperienceRepository experienceRepository;
    private final ExperienceMapper experienceMapper;
    private final ProfileServiceImpl profileService;

    @Override
    public List<ExperienceDTO> findAll() {
        List<Experience> experiences = experienceRepository.findAll();
        return experiences.stream().map(experienceMapper::fromExperience).toList();
    }

    @Override
    public List<ExperienceDTO> getProfileExperiences(Long profileId) {
        List<Experience> experiences = experienceRepository.findProfileExperiences(profileId);
        return experiences.stream().map(experienceMapper::fromExperience).toList();
    }

    @Override
    public ExperienceDTO findById(Long id) {
        Experience experience = experienceRepository.findById(id).orElseThrow(() -> new AppException("Experience not found", HttpStatus.NOT_FOUND));
        return experienceMapper.fromExperience(experience);
    }

    @Override
    public ExperienceDTO addExperience(ExperienceDTO experienceDTO, Authentication connectedUser) {
        ProfileDTO profileDTO = profileService.getCurrentProfile(connectedUser);
        experienceDTO.setCreatedAt(Instant.now());
        Experience experience = experienceRepository.save(experienceMapper.fromExperienceDTO(experienceDTO, profileDTO));
        return experienceMapper.fromExperience(experience);
    }

    @Override
    public ExperienceDTO updateExperience(ExperienceDTO experienceDTO, Authentication connectedUser) {
        ProfileDTO profileDTO = profileService.getCurrentProfile(connectedUser);
        Experience experience = experienceRepository.save(experienceMapper.fromExperienceDTO(experienceDTO, profileDTO));
        return experienceMapper.fromExperience(experience);

    }

    @Override
    public void deleteExperience(Long id) {
    experienceRepository.deleteById(id);
    }
}
