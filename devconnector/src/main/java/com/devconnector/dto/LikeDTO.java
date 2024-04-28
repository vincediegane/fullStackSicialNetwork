package com.devconnector.dto;

import com.devconnector.model.Post;
import com.devconnector.model.User;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeDTO {
    private Long id;
    private Instant likedAt;
    private UserDTO userDTO;
    private PostDTO postDTO;
}
