package com.devconnector;

import com.devconnector.config.ApplicationAuditingAware;
import com.devconnector.enumeration.Role;
import com.devconnector.model.User;
import com.devconnector.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class DevconnectorApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevconnectorApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(UserRepository userRepository, PasswordEncoder passwordEncoder) {
 		return args -> {
			userRepository.save(User.builder().role(Role.USER).email("vincediegane@gmail.com").password(passwordEncoder.encode("123456")).firstName("Vincent").lastName("Faye").createdAt(Instant.now()).build());
			userRepository.save(User.builder().role(Role.ADMIN).email("babskadam@gmail.com").password(passwordEncoder.encode("123456")).firstName("Babacar").lastName("Kadam").createdAt(Instant.now()).build());
		};
	}

}
