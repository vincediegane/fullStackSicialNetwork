package com.devconnector.service.impl;

import com.devconnector.dto.SkillDTO;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.SkillMapper;
import com.devconnector.model.Skill;
import com.devconnector.model.User;
import com.devconnector.repository.SkillRepository;
import com.devconnector.repository.UserRepository;
import com.devconnector.service.SkillService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class SkillServiceImpl implements SkillService {
    private final SkillRepository skillRepository;
    private final SkillMapper skillMapper;
    private final UserRepository userRepository;

    @Override
    public List<SkillDTO> getSkills() {
        List<Skill> skills = skillRepository.findAll();
        return skills.stream().map(skillMapper::fromSkill).toList();
    }

    @Override
    public SkillDTO getSkill(Long id) {
        Skill skill = skillRepository.findById(id).orElseThrow(() -> new AppException("Skill not found", HttpStatus.NOT_FOUND));
        return skillMapper.fromSkill(skill);
    }

    @Override
    public Skill getByCodeAndLabel(String code, String label) {
        return skillRepository.findByCodeAndLabel(code, label).orElse(null);
    }

    @Override
    public SkillDTO addOrEditSkill(SkillDTO skillDTO, Authentication connectedUser) {
        Skill skillByCL = getByCodeAndLabel(skillDTO.getCode(), skillDTO.getLabel());
        if(skillByCL != null) {
            throw new AppException("Skill already added", HttpStatus.BAD_REQUEST);
        }
        User user = (User) connectedUser.getPrincipal();
        Skill skill = skillMapper.fromSkillDTO(skillDTO);
        if(skill.getUsers() == null) {
            skill.setUsers(new ArrayList<>());
        }
        skill.getUsers().add(user);
        skill.setUsers(skill.getUsers());
        Skill savedSkill = skillRepository.save(skill);
        return skillMapper.fromSkill(savedSkill);
    }

    @Override
    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

    @Override
    public List<SkillDTO> getSkillByUser(Long userId) {
        List<Skill> skills = userRepository.findSkillsByUserId(userId);
        return skills.stream().map(skillMapper::fromSkill).toList();
    }
}
