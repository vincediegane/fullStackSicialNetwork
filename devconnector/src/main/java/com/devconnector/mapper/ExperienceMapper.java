package com.devconnector.mapper;

import com.devconnector.dto.ExperienceDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.model.Experience;
import com.devconnector.model.Profile;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ExperienceMapper {
    private final  ProfileMapper profileMapper;

    public Experience fromExperienceDTO(ExperienceDTO experienceDTO) {
        return Experience.builder()
            .id(experienceDTO.getId())
            .title(experienceDTO.getTitle())
            .company(experienceDTO.getCompany())
            .location(experienceDTO.getLocation())
            .description(experienceDTO.getDescription())
            .fromDate(experienceDTO.getFromDate())
            .toDate(experienceDTO.getToDate())
            .current(experienceDTO.getCurrent())
            .createdAt(experienceDTO.getCreatedAt())
            .build();
    }

    public Experience fromExperienceDTO(ExperienceDTO experienceDTO, ProfileDTO profileDTO) {
        return Experience.builder()
                .id(experienceDTO.getId())
                .title(experienceDTO.getTitle())
                .company(experienceDTO.getCompany())
                .location(experienceDTO.getLocation())
                .description(experienceDTO.getDescription())
                .fromDate(experienceDTO.getFromDate())
                .toDate(experienceDTO.getToDate())
                .current(experienceDTO.getCurrent())
                .createdAt(experienceDTO.getCreatedAt())
                .profile(profileMapper.fromProfileDTO(profileDTO))
                .build();
    }

    public ExperienceDTO fromExperience(Experience experience) {
        return ExperienceDTO.builder()
            .id(experience.getId())
            .company(experience.getCompany())
            .title(experience.getTitle())
            .description(experience.getDescription())
            .location(experience.getLocation())
            .fromDate(experience.getFromDate())
            .toDate(experience.getToDate())
            .current(experience.getCurrent())
            .createdAt(experience.getCreatedAt())
            .build();
    }
}
