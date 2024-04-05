package com.techblog.backend.controller.v1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.backend.dto.contact.CreateContactFromDTO;
import com.techblog.backend.service.ContactService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/v1/contact")
@Tag(name = "Contact v1.0", description = "It is used for users to contact.")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("")
    @Operation(summary = "It is used to contact user")
    public ResponseEntity<String> create(@RequestBody CreateContactFromDTO createContactFromDTO) {
        try {
            contactService.createContactForm(createContactFromDTO);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("İletişim formunuz başarıyla ulaşmıştır.En kısa sürede dönüş yapılacaktır.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Form kaydedilirken bir sorun oluştu: " + e.getMessage());
        }
    }

}
