package com.devconnector.mapper;

import com.devconnector.dto.ProfileDTO;
import com.devconnector.dto.UserDTO;
import com.devconnector.model.Profile;
import com.devconnector.model.User;
import org.springframework.stereotype.Service;

@Service
public class ProfileMapper {
    private final UserMapper userMapper;

    public ProfileMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public Profile fromProfileDTO(ProfileDTO profileDTO) {
        return Profile.builder()
        .id(profileDTO.getId())
        .bio(profileDTO.getBio())
        .company(profileDTO.getCompany())
        .createdAt(profileDTO.getCreatedAt())
        .status(profileDTO.getStatus())
        .website(profileDTO.getWebsite())
        .githubUsername(profileDTO.getGithubUsername())
        .location(profileDTO.getLocation())
        .build();
    }

    public Profile fromProfileDTO(ProfileDTO profileDTO, UserDTO userDTO) {
        return Profile.builder()
                .id(profileDTO.getId())
                .bio(profileDTO.getBio())
                .company(profileDTO.getCompany())
                .createdAt(profileDTO.getCreatedAt())
                .status(profileDTO.getStatus())
                .website(profileDTO.getWebsite())
                .githubUsername(profileDTO.getGithubUsername())
                .location(profileDTO.getLocation())
                .user(userMapper.fromUserDTO(userDTO))
                .build();
    }

    public ProfileDTO fromProfile(Profile profile) {
        return ProfileDTO.builder()
            .id(profile.getId())
            .bio(profile.getBio())
            .status(profile.getStatus())
            .website(profile.getWebsite())
            .githubUsername(profile.getGithubUsername())
            .company(profile.getCompany())
            .location(profile.getLocation())
            .createdAt(profile.getCreatedAt())
            .build();
    }
}
