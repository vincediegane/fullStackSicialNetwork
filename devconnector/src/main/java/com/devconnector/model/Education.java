package com.devconnector.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "school_name")
    private String school;
    private String degree;
    @Column(name = "field_of_study")
    private String fieldOfStudy;
    @Column(name = "from_date")
    private Instant fromDate;
    @Column(name = "to_date")
    private Instant toDate;
    private boolean current;
    private String description;
    private Instant createdAt;

    @ManyToOne
    @JoinColumn(name = "profile_id", referencedColumnName = "profile_id", nullable = true)
    private Profile profile;

    public boolean getCurrent() {
        return current;
    }
}
