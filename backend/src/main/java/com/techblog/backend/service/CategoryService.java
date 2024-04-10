package com.techblog.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.techblog.backend.dto.api.TableRequestDTO;
import com.techblog.backend.dto.api.TableResponseDTO;
import com.techblog.backend.dto.category.CreateCategoryDTO;
import com.techblog.backend.dto.category.UpdateCategoryDTO;
import com.techblog.backend.helper.SlugHelper;
import com.techblog.backend.model.Category;
import com.techblog.backend.repository.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(CreateCategoryDTO createCategoryDTO) {
        Category category = new Category();

        category.setName(createCategoryDTO.getName());
        category.setSlug(SlugHelper.convertToSlug(createCategoryDTO.getName()));
        category.setDescription(createCategoryDTO.getDescription());
        category.setActive(createCategoryDTO.isActive());

        return categoryRepository.save(category);
    }

    public Category updateCategory(Long id, UpdateCategoryDTO updateCategoryDTO) {

        if(id == null){
           throw new IllegalArgumentException("Kategori ID bilgisi gereklidir.");
        }

        Category existingCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Geçersiz kategori ID'si: " + id));

        if (updateCategoryDTO.getName() != null) {
            existingCategory.setName(updateCategoryDTO.getName());
            existingCategory.setSlug(SlugHelper.convertToSlug(updateCategoryDTO.getName()));
        }

        if (updateCategoryDTO.getDescription() != null) {
            existingCategory.setDescription(updateCategoryDTO.getDescription());
        }
       
        existingCategory.setActive(updateCategoryDTO.isActive()); // isActive özelliğini güncelle

        return categoryRepository.save(existingCategory);
    }

    public List<Category> listActiveCategories(){
        return categoryRepository.findByActive(false);
    }

     public TableResponseDTO<Category> listPaginatedCategories(TableRequestDTO tableRequestDTO) {
        TableResponseDTO<Category> tableResponseDTO = new TableResponseDTO<>();

        int page = Optional.ofNullable(tableRequestDTO.getPage()).orElse(0);
        int limit = Optional.ofNullable(tableRequestDTO.getLimit()).orElse(100);

        Sort sort = Sort.by(Sort.Direction.ASC, "isActive");
        Pageable pageable = PageRequest.of(page, limit,sort);

        Page<Category> items;
        if (tableRequestDTO.getQuery() != null && !tableRequestDTO.getQuery().isEmpty()) {
            items = categoryRepository.findByRegex(tableRequestDTO.getQuery(), pageable);
        } else {
            items = categoryRepository.findAll(pageable);
        }

        tableResponseDTO.setLimit(limit);
        tableResponseDTO.setCurrentPage(page);
        tableResponseDTO.setTotalPage(items.getTotalPages());
        tableResponseDTO.setTotalRecord(items.getTotalElements());
        tableResponseDTO.setItems(items.getContent());

        return tableResponseDTO;

    }

}
