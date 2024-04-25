package com.devconnector.service.impl;

import com.devconnector.config.JwtService;
import com.devconnector.enumeration.Role;
import com.devconnector.dto.AuthRequestDTO;
import com.devconnector.dto.AuthResponseDTO;
import com.devconnector.dto.RegisterRequestDTO;
import com.devconnector.exception.AppException;
import com.devconnector.model.User;
import com.devconnector.repository.UserRepository;
import com.devconnector.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.time.Instant;

@Service
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponseDTO register(RegisterRequestDTO request) {
        var user = User
            .builder()
            .firstName(request.getFirstName())
            .lastName(request.getLastName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .createdAt(Instant.now())
            .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthResponseDTO.builder()
            .token(jwtToken)
            .build();
    }

    @Override
    public AuthResponseDTO authenticate(AuthRequestDTO request) {
        authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(
                  request.getEmail(),
                  request.getPassword()
          )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();

        if(passwordEncoder.matches(CharBuffer.wrap(request.getPassword()), user.getPassword())) {
            var jwtToken = jwtService.generateToken(user);
            return AuthResponseDTO.builder()
                    .token(jwtToken)
                    .build();
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    @Override
    public Authentication getUserMe(Authentication authentication) {
        log.info("auth user", authentication);
        return authentication;
    }
}
