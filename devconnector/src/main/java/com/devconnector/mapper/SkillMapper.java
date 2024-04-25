package com.devconnector.mapper;

import com.devconnector.dto.SkillDTO;
import com.devconnector.model.Skill;
import org.springframework.stereotype.Service;

@Service
public class SkillMapper {
    public Skill fromSkillDTO(SkillDTO skillDTO) {
        return Skill.builder()
            .id(skillDTO.getId())
            .code(skillDTO.getCode())
            .label(skillDTO.getLabel())
            .build();
    }

    public SkillDTO fromSkill(Skill skill) {
        return SkillDTO.builder()
            .id(skill.getId())
            .code(skill.getCode())
            .label(skill.getLabel())
            .build();
    }
}
