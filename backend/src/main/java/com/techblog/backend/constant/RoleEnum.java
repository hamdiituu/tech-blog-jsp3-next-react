package com.techblog.backend.constant;

public enum RoleEnum {
    Admin("Admin"),
    Editor("Editor"),
    User("User");

    private final String roleName;

    RoleEnum(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }
}
