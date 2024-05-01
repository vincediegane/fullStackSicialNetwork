package com.devconnector.controller;

import com.devconnector.service.GithubUserRepoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class GithubUserRepoController {

    private final GithubUserRepoService githubService;

    @GetMapping("/api/v1/github/{username}")
    public ResponseEntity<Object[]> getGithubRepos(@PathVariable String username) {
        return ResponseEntity.ok(githubService.getGithubRepos(username));
    }
}
