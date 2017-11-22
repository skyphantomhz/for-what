package com.cousin.forwhat.controller;

import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/account")
public class AccountController { ;
    @Autowired
    private AccountService accountService;

    @GetMapping()
    public ResponseEntity getAllBooks() {
        return new ResponseEntity<>(accountService.findAllAccounts(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity createNewBook(@Validated @RequestBody Account account) {
        Account todo = accountService.createNewAccount(account);
        return new ResponseEntity<>(todo, HttpStatus.CREATED);
    }

    @PatchMapping()
    public ResponseEntity updateTodo(@Validated @RequestBody Account account) {
        return new ResponseEntity<>(accountService.updateAccount(account), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteTodo(@PathVariable("id")  long id) {
        accountService.deleteAccount(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
