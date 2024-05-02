package com.devconnector.controller;

import com.devconnector.service.GithubUserRepoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/github")
public class GithubUserRepoController {

    private final GithubUserRepoService githubService;

    @GetMapping("/{username}")
    public ResponseEntity<Object[]> getGithubRepos(@PathVariable String username) {
        return ResponseEntity.ok(githubService.getGithubRepos(username));
    }

    @GetMapping("/gravatar/{email}")
    public ResponseEntity<String> getGravatarUrl(@PathVariable String email) throws UnsupportedEncodingException {
        return ResponseEntity.ok(githubService.getGravatar(email));
    }
}
