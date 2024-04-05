package com.techblog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techblog.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
