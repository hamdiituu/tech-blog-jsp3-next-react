package com.techblog.backend.dto.contact;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateContactFromDTO {
    private String name;
    private String email;
    private String phone;
    private String subject;
    private String message;
}