package com.devconnector.testing;

import lombok.*;

import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Student {
    private String firstName;
    private String lastName;
    private int age;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
//        return age == student.age && Objects.equals(firstName, student.firstName) && Objects.equals(lastName, student.lastName);
        return age == student.age;
    }

    @Override
    public int hashCode() {
        return Objects.hash(age);
    }
}
