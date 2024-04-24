package com.devconnector.testing;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class TestNiamaNiama {
    public static void main(String...args) {
        Student st1 = Student.builder().firstName("Vince").lastName("Faye").age(31).build();
        Student st2 = Student.builder().firstName("Roxy").lastName("Diouf").age(31).build();

        List<Student> studentsList = Arrays.asList(st1, st2, null, null);

        Set<Student> studentsSet = new HashSet<>();
        studentsSet.addAll(studentsList);

        System.out.println("----------------------------------");
        studentsList.forEach(student -> {
            if(student != null) System.out.println(student.toString());
            else System.out.println("null");
        });
        System.out.println("----------------------------------");
        studentsSet.forEach(student -> {
            if(student!=null) System.out.println(student.toString());
            else System.out.println("null");
        });

    }
}
