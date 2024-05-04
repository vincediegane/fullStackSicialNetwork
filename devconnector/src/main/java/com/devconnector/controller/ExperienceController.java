package com.devconnector.controller;

import com.devconnector.dto.ExperienceDTO;
import com.devconnector.service.ExperienceService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/experiences")
@AllArgsConstructor
public class ExperienceController {
    private final ExperienceService experienceService;

    @GetMapping("/")
    public List<ExperienceDTO> getExperiences() {
        return experienceService.findAll();
    }

    @GetMapping("/profile/{profileId}")
    public List<ExperienceDTO> getProfileExperiences(@PathVariable Long profileId) {
        return  experienceService.getProfileExperiences(profileId);
    }

    @GetMapping("/{id}")
    public ExperienceDTO getExperience(@PathVariable Long id) {
        return experienceService.findById(id);
    }

    @PostMapping("/")
    public ExperienceDTO addExperience(@RequestBody ExperienceDTO experienceDTO, Authentication connectedUser) {
        return experienceService.addExperience(experienceDTO, connectedUser);
    }

    @PutMapping("/{id}")
    public ExperienceDTO updateExperience(@PathVariable Long id, @RequestBody ExperienceDTO experienceDTO, Authentication connectedUser) {
        experienceDTO.setId(id);
        return experienceService.updateExperience(experienceDTO, connectedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
        return ResponseEntity.ok("deleted");
    }
}
