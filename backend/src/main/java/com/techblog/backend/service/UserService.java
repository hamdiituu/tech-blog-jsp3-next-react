package com.techblog.backend.service;

import org.springframework.stereotype.Service;

import com.techblog.backend.constant.RoleEnum;
import com.techblog.backend.dto.user.RegisterUserDto;
import com.techblog.backend.model.User;
import com.techblog.backend.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void registerUser(RegisterUserDto registerUserDto){
        User user = new User();
        user.setEmail(registerUserDto.getEmail());
        user.setUsername(registerUserDto.getUsername());
        // TODO: password hash required
        user.setPassword(registerUserDto.getPassword());
        user.setRole(RoleEnum.User.getRoleName());
        user.setEnabled(true);
        
        userRepository.save(user);
    }
    

}
