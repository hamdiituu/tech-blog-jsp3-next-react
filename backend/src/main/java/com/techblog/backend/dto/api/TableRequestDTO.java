package com.techblog.backend.dto.api;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TableRequestDTO {
    private int page;
    private int limit;
    private String query;
}
