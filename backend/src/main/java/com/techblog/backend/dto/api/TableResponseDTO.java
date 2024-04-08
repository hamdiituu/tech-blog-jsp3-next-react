package com.techblog.backend.dto.api;

import java.util.List;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TableResponseDTO<T> {
    private List<T> items;
    private Number limit;
    private Number currentPage;
    private Number totalPage;
    private Long totalRecord;
    private String errorMessage;
}
