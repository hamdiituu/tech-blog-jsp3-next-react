package com.techblog.backend.controller.v1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.backend.dto.api.TableRequestDTO;
import com.techblog.backend.dto.api.TableResponseDTO;
import com.techblog.backend.dto.contact.CreateContactFromDTO;
import com.techblog.backend.model.Contact;
import com.techblog.backend.service.ContactService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/v1/contact")
@Tag(name = "Contact v1.0", description = "It is used for users to contact.")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping("")
    @Operation(summary = "It is used to list contact forms")
    public ResponseEntity<TableResponseDTO<Contact>> list(TableRequestDTO tableRequestDTO) {

        TableResponseDTO<Contact> response = new TableResponseDTO<Contact>();
        try {
            response = contactService.listPaginatedContactForms(tableRequestDTO);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.setErrorMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }

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
