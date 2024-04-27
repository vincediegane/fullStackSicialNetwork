package com.devconnector.service;

import com.devconnector.dto.LikeDTO;

import java.util.List;

public interface LikeService {
    List<LikeDTO> findAll();
}
