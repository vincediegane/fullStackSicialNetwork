package com.devconnector.dto;

import lombok.*;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExperienceDTO {
    private Long id;
    private String title;
    private String company;
    private String location;
    private Instant fromDate;
    private Instant toDate;
    private String description;
    private boolean current;

    public boolean getCurrent() {
        return current;
    }
}
