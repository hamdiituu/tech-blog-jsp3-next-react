package com.techblog.backend.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUserDTO {
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private String password;
}