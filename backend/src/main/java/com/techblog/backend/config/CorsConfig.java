package com.techblog.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.context.annotation.Bean;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // İstemci tarafından kimlik doğrulaması kullanıyorsa true
        config.addAllowedOrigin("*"); // Tüm originlere izin verir, daha güvenli bir konfigürasyon için uygun originleri belirtin
        config.addAllowedHeader("*"); // Tüm headerları kabul et
        config.addAllowedMethod("*"); // Tüm HTTP metotlarını kabul et (GET, POST, PUT, DELETE, vb.)
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
