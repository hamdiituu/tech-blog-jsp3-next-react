package com.techblog.backend.dto.category;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCategoryDTO {
    private String name;
    private String description;
    private boolean isActive;
}