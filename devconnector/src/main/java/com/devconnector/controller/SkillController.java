package com.devconnector.controller;

import com.devconnector.dto.SkillDTO;
import com.devconnector.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/skills")
@AllArgsConstructor
public class SkillController {
    private final SkillService skillService;

    @GetMapping("/")
    public List<SkillDTO> getSkills() {
        return skillService.getSkills();
    }

    @GetMapping("/{skillId}")
    public SkillDTO getSkill(@PathVariable Long skillId) {
        return skillService.getSkill(skillId);
    }

    @GetMapping("/user/{userId}")
    public List<SkillDTO> getSkillByUser(@PathVariable Long userId) {
        return skillService.getSkillByUser(userId);
    }

    @PostMapping("/add")
    public SkillDTO addSkill(@RequestBody SkillDTO skillDTO, Authentication connectedUser) {
        return skillService.addOrEditSkill(skillDTO, connectedUser);
    }

    @PutMapping("/{skillId}")
    public SkillDTO updateSkill(@PathVariable Long skillId, @RequestBody SkillDTO skillDTO, Authentication connectedUser) {
        skillDTO.setId(skillId);
        return skillService.addOrEditSkill(skillDTO, connectedUser);
    }

    @DeleteMapping("/{skillId}")
    public ResponseEntity<String> deleteSkill(@PathVariable Long skillId) {
        skillService.deleteSkill(skillId);
        return ResponseEntity.ok("deleted");
    }
}
