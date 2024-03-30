package com.techblog.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/hello")
@Tag(name = "Hello", description = "It is used to check the health of the service")
public class HelloController {


    @GetMapping()
    @Operation(summary = "It is used to check the health of the service")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello, I'm working!");
    }

}
