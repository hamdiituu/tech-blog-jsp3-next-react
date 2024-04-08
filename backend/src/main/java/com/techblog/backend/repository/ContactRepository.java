package com.techblog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.techblog.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contact WHERE name regexp ?1 OR email regexp ?1 OR subject regexp ?1 OR phone regexp ?1 OR message regexp ?1")
    Page<Contact> findByRegex(String regex, Pageable pageable);
}
