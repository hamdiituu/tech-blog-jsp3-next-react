package com.techblog.backend.constant;

import com.techblog.backend.constant.RoleEnum;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class RoleEnumTest {
    @Test
    public void testRoleEnumValues() {
        // Enum değerlerinin doğru rol adlarını döndürüp döndürmediğini kontrol eder.
        assertEquals("Admin", RoleEnum.Admin.getRoleName());
        assertEquals("Editor", RoleEnum.Editor.getRoleName());
        assertEquals("User", RoleEnum.User.getRoleName());
    }

    @Test
    public void testRoleEnumEquality() {
        // Enum değerlerinin kendilerine eşit olduğunu kontrol eder.
        assertEquals(RoleEnum.Admin, RoleEnum.Admin);
        assertEquals(RoleEnum.Editor, RoleEnum.Editor);
        assertEquals(RoleEnum.User, RoleEnum.User);

        // Farklı enum değerlerinin birbirine eşit olmadığını kontrol eder.
        assertNotEquals(RoleEnum.Admin, RoleEnum.Editor);
        assertNotEquals(RoleEnum.Admin, RoleEnum.User);
        assertNotEquals(RoleEnum.Editor, RoleEnum.User);
    }

    @Test
    public void testRoleEnumToString() {
        // Enum değerlerinin toString() metodunun beklenen çıktıları üretip üretmediğini
        // kontrol eder.
        assertEquals("Admin", RoleEnum.Admin.toString());
        assertEquals("Editor", RoleEnum.Editor.toString());
        assertEquals("User", RoleEnum.User.toString());
    }

    @Test
    public void testRoleEnumInstance() {
        // Enum değerlerinin doğru sınıf türüne sahip olduğunu kontrol eder.
        assertTrue(RoleEnum.Admin instanceof RoleEnum);
        assertTrue(RoleEnum.Editor instanceof RoleEnum);
        assertTrue(RoleEnum.User instanceof RoleEnum);
    }
}
