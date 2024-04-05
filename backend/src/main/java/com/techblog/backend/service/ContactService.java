package com.techblog.backend.service;

import org.apache.tomcat.util.bcel.Const;
import org.springframework.stereotype.Service;

import com.techblog.backend.dto.contact.CreateContactFromDTO;
import com.techblog.backend.model.Contact;
import com.techblog.backend.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public void createContactForm(CreateContactFromDTO createContactFromDTO){
        Contact contact = new Contact();
        contact.setName(createContactFromDTO.getName());
        contact.setEmail(createContactFromDTO.getEmail());
        contact.setPhone(createContactFromDTO.getPhone());
        contact.setSubject(createContactFromDTO.getSubject());
        contact.setMessage(createContactFromDTO.getMessage());
        contact.setReaded(false);

        contactRepository.save(contact);
    }

}
