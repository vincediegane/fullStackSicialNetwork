package com.devconnector.mapper;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.model.Education;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EducationMapper {
    private final ProfileMapper profileMapper;

    public EducationDTO fromEducation(Education education) {
        return EducationDTO.builder()
            .id(education.getId())
            .school(education.getSchool())
            .description(education.getDescription())
            .fieldOfStudy(education.getFieldOfStudy())
            .degree(education.getDegree())
            .fromDate(education.getFromDate())
            .toDate(education.getToDate())
            .current(education.getCurrent())
            .createdAt(education.getCreatedAt)
            .build();
    }

    public Education fromEducationDTO(EducationDTO educationDTO) {
        return Education.builder()
            .id(educationDTO.getId())
            .school(educationDTO.getSchool())
            .description(educationDTO.getDescription())
            .fieldOfStudy(educationDTO.getFieldOfStudy())
            .degree(educationDTO.getDegree())
            .fromDate(educationDTO.getFromDate())
            .toDate(educationDTO.getToDate())
            .current(educationDTO.getCurrent())
            .createdAt(educationDTO.getCreatedAt())
            .build();
    }

    public Education fromEducationDTO(EducationDTO educationDTO, ProfileDTO profileDTO) {
        return Education.builder()
            .id(educationDTO.getId())
            .school(educationDTO.getSchool())
            .description(educationDTO.getDescription())
            .fieldOfStudy(educationDTO.getFieldOfStudy())
            .degree(educationDTO.getDegree())
            .fromDate(educationDTO.getFromDate())
            .toDate(educationDTO.getToDate())
            .current(educationDTO.getCurrent())
            .profile(profileMapper.fromProfileDTO(profileDTO))
            .build();
    }
}
