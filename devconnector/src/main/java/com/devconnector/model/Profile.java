package com.devconnector.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "profile_id")
    private Long id;
    private String company;
    private String website;
    private String location;
    private String status;
    private String bio;
    private String githubUsername;

    @OneToMany
    private List<Skill> skills;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Experience> experiences;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Education> educations;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    private Instant createdAt;
}
