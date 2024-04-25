package com.devconnector.mapper;

import com.devconnector.dto.UserDTO;
import com.devconnector.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public User fromUserDTO(UserDTO userDTO) {
        User user = User.builder()
            .build();

        return user;
    }

    public UserDTO fromUser(User user) {
        UserDTO userDTO = UserDTO.builder()
            .id(user.getId())
            .email(user.getEmail())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .password(user.getPassword())
            .role(user.getRole())
            .createdAt(user.getCreatedAt())
            .build();
        return userDTO;
    }
}
