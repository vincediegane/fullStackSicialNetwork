package com.devconnector.service.impl;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.EducationMapper;
import com.devconnector.mapper.ProfileMapper;
import com.devconnector.model.Education;
import com.devconnector.model.Profile;
import com.devconnector.model.User;
import com.devconnector.repository.EducationRepository;
import com.devconnector.service.EducationService;
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
public class EducationServiceImpl implements EducationService {
    private final EducationRepository educationRepository;
    private final EducationMapper educationMapper;
    private final ProfileMapper profileMapper;
    private final ProfileService profileService;

    @Override
    public List<EducationDTO> findAll() {
        List<Education> educations =educationRepository.findAll();
        return educations.stream().map(educationMapper::fromEducation).toList();
    }

    @Override
    public EducationDTO findById(Long id) {
        Education education = educationRepository.findById(id).orElseThrow(() -> new AppException("Education not found", HttpStatus.NOT_FOUND));
        return educationMapper.fromEducation(education);
    }

    @Override
    public EducationDTO addEducation(EducationDTO educationDTO, Authentication connectedUser) {
        ProfileDTO profileDTO = profileService.getCurrentProfile(connectedUser);
        educationDTO.setCreatedAt(Instant.now());
        Education education = educationRepository.save(educationMapper.fromEducationDTO(educationDTO, profileDTO));
        return educationMapper.fromEducation(education);
    }

    @Override
    public EducationDTO updateEducation(EducationDTO educationDTO, Authentication connectedUser) {
        ProfileDTO profileDTO = profileService.getCurrentProfile(connectedUser);
        Education education = educationRepository.save(educationMapper.fromEducationDTO(educationDTO, profileDTO));
        return educationMapper.fromEducation(education);
    }

    @Override
    public void deleteEducation(Long id) {
        educationRepository.deleteById(id);
    }
}
