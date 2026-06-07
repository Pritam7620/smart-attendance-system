package com.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Studenttbl")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String fullName;
    @Column
    private String email;
    @Column
    private String mobile;
    @Column
    private String rollNo;
    @Column
    private String password;
    @Column
    private String department;
    @Column
    private LocalDateTime createdAt;
    
    

}