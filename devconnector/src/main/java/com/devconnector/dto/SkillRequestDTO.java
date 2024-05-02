package com.devconnector.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillRequestDTO {
    private Long id;
    private String label;
    private String code;
}
