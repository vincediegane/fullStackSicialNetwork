package com.devconnector.controller;

import com.devconnector.dto.EducationDTO;
import com.devconnector.dto.ProfileDTO;
import com.devconnector.service.EducationService;
import com.devconnector.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/educations")
@AllArgsConstructor
public class EducationController {
    private final EducationService educationService;
    private final ProfileService profileService;

    @GetMapping("/")
    public List<EducationDTO> getEducations() {
        return educationService.findAll();
    }

    @GetMapping("/{id}")
    public EducationDTO getEducation(@PathVariable Long id) {
        return educationService.findById(id);
    }
    
    @PostMapping("/")
    public EducationDTO addEducation(@RequestBody EducationDTO educationDTO, Authentication connectedUser) {
        return educationService.addEducation(educationDTO, connectedUser);
    }

    @PutMapping("/{id}")
    public EducationDTO updateEducation(@PathVariable Long id, @RequestBody EducationDTO educationDTO, Authentication connectedUser) {
        educationDTO.setId(id);
        return educationService.updateEducation(educationDTO, connectedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
        return ResponseEntity.ok("deleted");
    }
}
