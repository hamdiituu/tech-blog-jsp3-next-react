package com.techblog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.techblog.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query(nativeQuery=true, value="SELECT * FROM contact WHERE subject regexp ?1 OR name regexp ?1")
    Page<Contact> findByRegex(String regex, Pageable pageable);
}
