package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.entity.Student;
import com.repo.Studentrepo;

@Service
public class StudentService {
      
	
	private Studentrepo studentrepo;
 	
	public StudentService(Studentrepo studentrepo) {
		// TODO Auto-generated constructor stub
		this.studentrepo = studentrepo;
		
	}
	
	public Student Register(Student student) {
		
		return studentrepo.save(student);
	}
	
	public List<Student> getAll(){
		return studentrepo.findAll();
	}
	
	public Optional<Student> getById(Long id){
		return studentrepo.findById(id);
	}
}
