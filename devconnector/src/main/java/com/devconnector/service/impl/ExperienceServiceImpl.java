package com.devconnector.service.impl;

import com.devconnector.dto.ExperienceDTO;
import com.devconnector.service.ExperienceService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {
    @Override
    public List<ExperienceDTO> findAll() {
        return null;
    }

    @Override
    public ExperienceDTO findById(Long id) {
        return null;
    }

    @Override
    public ExperienceDTO addExperience(ExperienceDTO experienceDTO) {
        return null;
    }

    @Override
    public ExperienceDTO updateExperience(ExperienceDTO experienceDTO) {
        return null;
    }

    @Override
    public void deleteExperience(Long id) {

    }
}
