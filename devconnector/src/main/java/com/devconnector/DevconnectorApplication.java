package com.devconnector;

import com.devconnector.enumeration.Role;
import com.devconnector.model.User;
import com.devconnector.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class DevconnectorApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevconnectorApplication.class, args);
	}

	public CommandLineRunner run(UserRepository userRepository) {
		List<User> users = Arrays.asList(
			User.builder().role(Role.USER).email("vincediegane@gmail.com").password("123456").firstName("Vincent").lastName("Faye").createdAt(Instant.now()).build(),
			User.builder().role(Role.ADMIN).email("kadambabs@gmail.com").password("123456").firstName("Babacar").lastName("Kadam").createdAt(Instant.now()).build()
		);
 		return args -> {
			userRepository.saveAll(users);
		};
	}

}
