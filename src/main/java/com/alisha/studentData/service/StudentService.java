package com.alisha.studentData.service;

import com.alisha.studentData.model.Student;

import java.util.List;

public interface StudentService {
    public  Student addStudent(Student student);
    public List<Student> getAllStudents();
}
