package com.devconnector.mapper;

import com.devconnector.dto.UserDTO;
import com.devconnector.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public User fromUserDTO(UserDTO userDTO) {
        return User.builder()
            .id(userDTO.getId())
            .email(userDTO.getEmail())
            .firstName(userDTO.getFirstName())
            .lastName(userDTO.getLastName())
            .createdAt(userDTO.getCreatedAt())
            .role(userDTO.getRole())
            .password(userDTO.getPassword())
            .build();
    }

    public UserDTO fromUser(User user) {
        return UserDTO.builder()
            .id(user.getId())
            .email(user.getEmail())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .password(user.getPassword())
            .role(user.getRole())
            .createdAt(user.getCreatedAt())
            .build();
    }
}
