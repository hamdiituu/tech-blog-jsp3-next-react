package com.techblog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.techblog.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contact WHERE LOWER(name) regexp LOWER(:searchTerm) OR LOWER(email) regexp LOWER(:searchTerm) OR LOWER(subject) regexp LOWER(:searchTerm) OR LOWER(phone) regexp LOWER(:searchTerm) OR LOWER(message) regexp LOWER(:searchTerm)")
    Page<Contact> findByRegex(@Param("searchTerm") String searchTerm, Pageable pageable);
}
