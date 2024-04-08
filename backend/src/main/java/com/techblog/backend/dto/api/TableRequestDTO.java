package com.techblog.backend.dto.api;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TableRequestDTO {
    private int page = 0;
    private int limit = 100;
    private String query = null;
}
