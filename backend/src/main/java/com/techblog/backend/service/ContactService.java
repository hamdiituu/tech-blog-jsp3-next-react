package com.techblog.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.techblog.backend.dto.api.TableRequestDTO;
import com.techblog.backend.dto.api.TableResponseDTO;
import com.techblog.backend.dto.contact.CreateContactFromDTO;
import com.techblog.backend.model.Contact;
import com.techblog.backend.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public void createContactForm(CreateContactFromDTO createContactFromDTO) {
        Contact contact = new Contact();
        contact.setName(createContactFromDTO.getName());
        contact.setEmail(createContactFromDTO.getEmail());
        contact.setPhone(createContactFromDTO.getPhone());
        contact.setSubject(createContactFromDTO.getSubject());
        contact.setMessage(createContactFromDTO.getMessage());
        contact.setReaded(false);

        contactRepository.save(contact);
    }

    public TableResponseDTO<Contact> listPaginatedContactForms(TableRequestDTO tableRequestDTO) {
        TableResponseDTO<Contact> tableResponseDTO = new TableResponseDTO<>();

        int page = Optional.ofNullable(tableRequestDTO.getPage()).orElse(0);
        int limit = Optional.ofNullable(tableRequestDTO.getLimit()).orElse(100);

        Sort sort = Sort.by(Sort.Direction.ASC, "isReaded");
        Pageable pageable = PageRequest.of(page, limit,sort);

        Page<Contact> items;
        if (tableRequestDTO.getQuery() != null && !tableRequestDTO.getQuery().isEmpty()) {
            items = contactRepository.findByRegex(tableRequestDTO.getQuery(), pageable);
        } else {
            items = contactRepository.findAll(pageable);
        }

        tableResponseDTO.setLimit(limit);
        tableResponseDTO.setCurrentPage(page);
        tableResponseDTO.setTotalPage(items.getTotalPages());
        tableResponseDTO.setTotalRecord(items.getTotalElements());
        tableResponseDTO.setItems(items.getContent());

        return tableResponseDTO;

    }

    public void markContactsAsReaded(List<Long> ids) {
        if (ids != null) {
            List<Contact> contacts = contactRepository.findAllById(ids);
            for (Contact contact : contacts) {
                contact.setReaded(true);
            }
            contactRepository.saveAll(contacts);
        }
    }

}
