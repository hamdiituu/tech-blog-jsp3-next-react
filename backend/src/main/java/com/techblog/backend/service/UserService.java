package com.techblog.backend.service;

import org.springframework.stereotype.Service;

import com.techblog.backend.dto.user.RegisterUserDTO;
import com.techblog.backend.model.User;
import com.techblog.backend.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void registerUser(RegisterUserDTO registerUserDTO){
        User user = new User();
        user.setEmail(registerUserDTO.getEmail());
        user.setUsername(registerUserDTO.getUsername());
        // TODO: password hash required
        user.setPassword(registerUserDTO.getPassword());
        user.setFirstname(registerUserDTO.getFirstname());
        user.setLastname(registerUserDTO.getLastname());


        //user.setRole(RoleEnum.User.getRoleName());
        // user.setEnabled(true);

        
        userRepository.save(user);
    }
    

}
