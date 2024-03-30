package com.techblog.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI cusOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Techblog Backend API Docs.")
                        .version("1.0")
                        .description("Techblog mobile app and web app backend service")
                        .termsOfService("http://swagger.io/terms/")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org"))
                        .contact(new Contact().email("hamditugmobil@gmail.com").name("Hamdi Tuğ")));
    }
}
