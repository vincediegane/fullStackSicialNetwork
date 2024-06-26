package com.devconnector.service.impl;

import com.devconnector.config.JwtService;
import com.devconnector.dto.*;
import com.devconnector.enumeration.Role;
import com.devconnector.exception.AppException;
import com.devconnector.mapper.SkillMapper;
import com.devconnector.mapper.UserMapper;
import com.devconnector.model.Skill;
import com.devconnector.model.User;
import com.devconnector.repository.SkillRepository;
import com.devconnector.repository.UserRepository;
import com.devconnector.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserMapper userMapper;
    private final SkillMapper skillMapper;
    private final SkillRepository skillRepository;

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

        Map<String, Object> claims = new HashMap<>();
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());
        claims.put("role", user.getRole());

        var jwtToken = jwtService.generateToken(claims, user);
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

        Map<String, Object> claims = new HashMap<>();
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());
        claims.put("role", user.getRole());

        if(passwordEncoder.matches(CharBuffer.wrap(request.getPassword()), user.getPassword())) {
            var jwtToken = jwtService.generateToken(claims, user);
            return AuthResponseDTO.builder()
                    .token(jwtToken)
                    .build();
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    @Override
    public UserDTO getCurrentUser() {
        log.info("auth user");
        // Recuperer l'objet Authentication a partir du contexte de securite:
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Verifier si l'utilisateur est authentifie:
        if (authentication != null && authentication.isAuthenticated() && !(authentication instanceof AnonymousAuthenticationToken)) {
            User currentUser = (User) authentication.getPrincipal();
            return userMapper.fromUser(currentUser);
        }
        throw new AppException("No auth user found", HttpStatus.FORBIDDEN);
    }

    @Override
    public UserDTO getUserByProfile(Long profileId) {
        User user = userRepository.findByProfileId(profileId);
        return userMapper.fromUser(user);
    }
}
