package com.devconnector.service;

import com.devconnector.dto.AuthRequestDTO;
import com.devconnector.dto.AuthResponseDTO;
import com.devconnector.dto.RegisterRequestDTO;
import org.springframework.security.core.Authentication;

public interface AuthService {
    AuthResponseDTO register(RegisterRequestDTO request);
    AuthResponseDTO authenticate(AuthRequestDTO request);
    Authentication getUserMe(Authentication authentication);
}
