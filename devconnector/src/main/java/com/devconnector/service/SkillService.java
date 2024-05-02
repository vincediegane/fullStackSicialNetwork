package com.devconnector.service;

import com.devconnector.dto.SkillDTO;
import com.devconnector.dto.SkillRequestDTO;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface SkillService {
    List<SkillDTO> getSkills();
    SkillDTO getSkill(Long id);
    SkillDTO addOrEditSkill(SkillDTO skillDTO, Authentication connectedUser);
    void deleteSkill(Long id);
    List<SkillDTO> getSkillByUser(Long userId);
}
