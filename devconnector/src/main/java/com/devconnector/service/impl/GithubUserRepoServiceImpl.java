package com.devconnector.service.impl;

import com.devconnector.service.GithubUserRepoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;

import static com.devconnector.utilis.GravatarUtil.sha256Hex;

@Service
@AllArgsConstructor
public class GithubUserRepoServiceImpl implements GithubUserRepoService {

    private final RestTemplate restTemplate;

    @Override
    public Object[] getGithubRepos(String username) {
        final String GITHUB_CLIENT_ID = "a45db75edf691e106fbe";
        final String GITHUB_SECRET = "32932f7992cb365fed9c62c29b9c68ee08ed30c6";
        final String GITHUB_URL = "https://api.github.com/users/";

        // Make an HTTP GET request to the external service using RestTemplate
        ResponseEntity<Object[]> response = restTemplate.getForEntity(GITHUB_URL + username + "/repos?per_page=5&sort=created: asc&client_id=" + GITHUB_CLIENT_ID + "&client_secret=" + GITHUB_SECRET, Object[].class);

        return response.getBody();
    }

    @Override
    public String getGravatar(String email) throws UnsupportedEncodingException {
        email = email.toLowerCase();
        String hash = sha256Hex(email);
        return "https://gravatar.com/avatar/" + hash;
    }
}
