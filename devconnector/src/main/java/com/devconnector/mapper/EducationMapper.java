package com.devconnector.mapper;

import com.devconnector.dto.EducationDTO;
import com.devconnector.model.Education;
import org.springframework.stereotype.Service;

@Service
public class EducationMapper {
    public EducationDTO fromEducation(EducationDTO educationDTO) {
        return EducationDTO.builder()
            .id(educationDTO.getId())
            .school(educationDTO.getSchool())
            .description(educationDTO.getDescription())
            .fieldOfStudy(educationDTO.getFieldOfStudy())
            .degree(educationDTO.getDegree())
            .fromDate(educationDTO.getFromDate())
            .toDate(educationDTO.getToDate())
            .current(educationDTO.getCurrent())
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
            .build();
    }
}
