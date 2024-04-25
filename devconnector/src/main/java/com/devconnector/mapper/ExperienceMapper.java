package com.devconnector.mapper;

import com.devconnector.dto.ExperienceDTO;
import com.devconnector.model.Experience;
import com.devconnector.model.Profile;
import org.springframework.stereotype.Service;

@Service
public class ExperienceMapper {
    public Experience fromExperienceDTO(ExperienceDTO experienceDTO, Profile profile) {
        return Experience.builder()
            .id(experienceDTO.getId())
            .title(experienceDTO.getTitle())
            .company(experienceDTO.getCompany())
            .location(experienceDTO.getLocation())
            .description(experienceDTO.getDescription())
            .fromDate(experienceDTO.getFromDate())
            .toDate(experienceDTO.getToDate())
            .current(experienceDTO.getCurrent())
            .profile(profile)
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
            .build();
    }
}
