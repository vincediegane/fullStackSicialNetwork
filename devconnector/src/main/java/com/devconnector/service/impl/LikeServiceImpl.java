package com.devconnector.service.impl;

import com.devconnector.dto.LikeDTO;
import com.devconnector.service.LikeService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class LikeServiceImpl implements LikeService {
    @Override
    public List<LikeDTO> findAll() {
        return List.of();
    }
}
