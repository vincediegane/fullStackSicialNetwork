package com.devconnector.dto;

import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EducationDTO {
    private Long id;
    private String school;
    private String degree;
    private String fieldOfStudy;
    private Instant fromDate;
    private Instant toDate;
    private boolean current;
    private String description;
    private Instant createdAt;

    public boolean getCurrent() {
        return current;
    }
}
