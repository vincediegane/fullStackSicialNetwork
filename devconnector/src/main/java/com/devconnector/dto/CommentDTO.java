package com.devconnector.dto;

import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDTO {
    private Long id;
    private String body;
    private Instant createdAt;
    private String postId;
}
