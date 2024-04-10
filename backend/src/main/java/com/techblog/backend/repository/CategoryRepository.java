package com.techblog.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.techblog.backend.model.Category;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM category WHERE LOWER(name) regexp LOWER(:searchTerm) OR LOWER(slug) regexp LOWER(:searchTerm) OR LOWER(description) regexp LOWER(:searchTerm)")
    Page<Category> findByRegex(@Param("searchTerm") String searchTerm, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT * FROM category  WHERE isActive = true")
    List<Category> findByActive(boolean active);

}
