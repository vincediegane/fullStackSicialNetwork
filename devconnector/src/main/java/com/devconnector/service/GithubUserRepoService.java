package com.devconnector.service;

import java.io.UnsupportedEncodingException;

public interface GithubUserRepoService {
    Object[] getGithubRepos(String username);
    String getGravatar(String email) throws UnsupportedEncodingException;
}
