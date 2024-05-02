package com.devconnector.service;

import com.devconnector.dto.*;
import org.springframework.security.core.Authentication;

public interface AuthService {
    AuthResponseDTO register(RegisterRequestDTO request);
    AuthResponseDTO authenticate(AuthRequestDTO request);
    UserDTO getCurrentUser();
    UserDTO getUserByProfile(Long profileId);
}
