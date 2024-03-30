package com.techblog.backend.controller.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.backend.dto.user.RegisterUserDTO;
import com.techblog.backend.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/v1/auth")
@Tag(name = "Auth v1.0", description = "It is used for users to log in.")
public class AuthController {
    /*
     * TODO:
     * 1.register +
     * 2.login
     * 3.password change
     * 4.forgat password
     */

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @Operation(summary = "It is used to register user")
    public ResponseEntity<String> registerUser(@Validated @RequestBody RegisterUserDTO registerUserDTO) {
        try {
            userService.registerUser(registerUserDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Hesabınız başarıyla oluşturuldu.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Hesap oluşturulurken bir hata ile karşılaşıldı: " + e.getMessage());
        }
    }
}
