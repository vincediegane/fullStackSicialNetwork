package com.devconnector.controller;

import com.devconnector.dto.ProfileDTO;
import com.devconnector.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/profiles")
@AllArgsConstructor
public class ProfileController {
    private final ProfileService profileService;

    @GetMapping("/")
    public List<ProfileDTO> getProfiles() {
        return profileService.findAll();
    }

    @GetMapping("/{id}")
    public ProfileDTO getProfile(@PathVariable Long id) {
        return profileService.getProfile(id);
    }

    @GetMapping("/users/{userId}")
    public ProfileDTO getUserProfile(@PathVariable Long userId) {
        return profileService.getProfileByUserId(userId);
    }

    @GetMapping("/me")
    public ProfileDTO getCurrentProfile(Authentication connectedUser) {
        return profileService.getCurrentProfile(connectedUser);
    }

    @PostMapping("/")
    public ProfileDTO addProfile(@RequestBody ProfileDTO profileDTO, Authentication connectedUser) {
        return profileService.addProfile(profileDTO, connectedUser);
    }

    @PutMapping("/{id}")
    public ProfileDTO updateProfile(@PathVariable Long id, @RequestBody ProfileDTO profileDTO, Authentication connectedUser) {
        profileDTO.setId(id);
        return profileService.updateProfile(profileDTO, connectedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProfile(@PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.ok("deleted");
    }
}
