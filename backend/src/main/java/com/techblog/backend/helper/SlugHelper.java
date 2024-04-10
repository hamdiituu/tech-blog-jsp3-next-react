package com.techblog.backend.helper;

public class SlugHelper {
    public static String convertToSlug(String input){
        if(input == null || input.isEmpty()){
            return "";
        }

        String slug = input.toLowerCase();
        slug = slug.replaceAll("[^a-z0-9\\s-]", "");
        slug = slug.replaceAll("\\s+", "-");
        slug = slug.replaceAll("^-+|-+$", "");
        return slug;
    }
}
