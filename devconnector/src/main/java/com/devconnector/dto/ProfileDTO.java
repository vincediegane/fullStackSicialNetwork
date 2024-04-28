package com.devconnector.dto;

import java.time.Instant;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileDTO {
    private Long id;
    private String company;
    private String website;
    private String location;
    private String status;
    private String bio;
    private String githubUsername;
    private Instant createdAt;
}
