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
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(String fullName, String email, String mobile, String rollNo, String password, String department,
			LocalDateTime createdAt) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.mobile = mobile;
		this.rollNo = rollNo;
		this.password = password;
		this.department = department;
		this.createdAt = createdAt;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getRollNo() {
		return rollNo;
	}
	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", fullName=" + fullName + ", email=" + email + ", mobile=" + mobile + ", rollNo="
				+ rollNo + ", password=" + password + ", department=" + department + ", createdAt=" + createdAt + "]";
	}
    
   
}