package com.techblog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techblog.backend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    // special queries
}