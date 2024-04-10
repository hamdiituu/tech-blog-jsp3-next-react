package com.techblog.backend.controller.v1;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.backend.dto.api.TableRequestDTO;
import com.techblog.backend.dto.api.TableResponseDTO;
import com.techblog.backend.dto.category.CreateCategoryDTO;
import com.techblog.backend.dto.category.UpdateCategoryDTO;
import com.techblog.backend.model.Category;
import com.techblog.backend.service.CategoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/v1/category")
@Tag(name = "Category v1.0", description = "It is used for category crud operations")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/actives")
    @Operation(summary = "It is used to list active categories")
    public ResponseEntity<List<Category>> activeCategories() {

        try {
            List<Category> response = categoryService.listActiveCategories();
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    @GetMapping("")
    @Operation(summary = "It is used to list categories")
    public ResponseEntity<TableResponseDTO<Category>> list(TableRequestDTO tableRequestDTO) {
        TableResponseDTO<Category> response = new TableResponseDTO<Category>();
        try {
            response = categoryService.listPaginatedCategories(tableRequestDTO);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.setErrorMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(response);
        }
    }

    @PostMapping("")
    @Operation(summary = "It is used to create new category")
    public ResponseEntity<String> create(@RequestBody CreateCategoryDTO createCategoryDTO) {
        try {
            Category category = categoryService.createCategory(createCategoryDTO);
            if (category == null) {
                throw new Exception("Kategori kaydı başarısız oldu");
            }
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Kategori başarıyla oluşturuldu.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Kategori oluşturulamadı. :" + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    @Operation(summary = "It is used to update already category")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody UpdateCategoryDTO updateCategoryDTO) {
        try {
            Category category = categoryService.updateCategory(id, updateCategoryDTO);
            if (category == null) {
                throw new Exception("Kategori güncelleme başarısız oldu");
            }
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Kategori başarıyla güncellendi.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Kategori güncellenemedi. :" + e.getMessage());
        }
    }

}
