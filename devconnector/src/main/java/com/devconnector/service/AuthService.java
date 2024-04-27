package com.devconnector.service;

import com.devconnector.dto.AuthRequestDTO;
import com.devconnector.dto.AuthResponseDTO;
import com.devconnector.dto.RegisterRequestDTO;
import com.devconnector.dto.UserDTO;
import org.springframework.security.core.Authentication;

public interface AuthService {
    AuthResponseDTO register(RegisterRequestDTO request);
    AuthResponseDTO authenticate(AuthRequestDTO request);
    UserDTO getCurrentUser();
}
