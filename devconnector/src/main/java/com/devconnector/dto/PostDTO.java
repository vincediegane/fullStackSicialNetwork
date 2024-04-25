package com.devconnector.dto;

import lombok.*;
import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostDTO {
    private Long id;
    private String title;
    private String body;
    private Instant createdAt;
    private UserDTO userDTO;
}
