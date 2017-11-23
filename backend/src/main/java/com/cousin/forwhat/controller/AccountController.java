package com.cousin.forwhat.controller;

import com.cousin.forwhat.common.ErrorException;
import com.cousin.forwhat.common.ErrorResponse;
import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping()
    public ResponseEntity getAllAccounts() {
        return new ResponseEntity<>(accountService.findAllAccounts(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/{username}")
    public ResponseEntity getAccountByUsername(@PathVariable("username") String username) {
        return new ResponseEntity<>(accountService.findAccountsByUsername(username), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/{username}/{password}")
    public ResponseEntity getAccountByUsernameAndPassword(@PathVariable("username") String username, @PathVariable("password") String password) {
        return new ResponseEntity<>(accountService.findAccountsByUsernameAndPassword(username, password), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping()
    public ResponseEntity register(@Validated @RequestBody Account account) throws ErrorException {
        try {
            if (accountService.existUsernameAccount(account)) {
                throw new ErrorException("Username đã tồn tại");
            } else if (StringUtils.isEmpty(account.getEmail().trim())) {
                throw new ErrorException("Email không được để trống");
            } else {
                Account todo = accountService.register(account);
                return new ResponseEntity<>(todo, HttpStatus.CREATED);
            }
        } catch (Exception e) {
            throw new ErrorException("Lỗi " + e.getMessage());
        }
    }

    @CrossOrigin
    @PatchMapping(value = "/{id}")
    public ResponseEntity updateAccount(@PathVariable("id") Long id, @Validated @RequestBody Account account) throws ErrorException {
        try {
            return new ResponseEntity<>(accountService.updateAccount(id, account), HttpStatus.OK);
        } catch (Exception e) {
            throw new ErrorException("Có lỗi " + e.getMessage());
        }
    }

    @CrossOrigin
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteAccount(@PathVariable("id") Long id) throws ErrorException {
        try {
            accountService.deleteAccount(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            throw new ErrorException("Có lỗi " + e.getMessage());
        }
    }

    @CrossOrigin
    @RequestMapping(
            value = "/login",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@Validated @RequestBody Account account) throws ErrorException {
        Account accountReturn;
        if (StringUtils.isEmpty(account.getUsername().trim()) || StringUtils.isEmpty(account.getPassword().trim())) {
            throw new ErrorException("Username hoặc Password bị trống");
        } else if (accountService.existUsernameAccount(account)) {
            if (!accountService.findAccountsByUsername(account.getUsername()).getPassword().equals(account.getPassword())) {
                throw new ErrorException("Password bị sai");
            }
        } else if (accountService.findAccountsByUsernameAndPassword((account.getUsername().trim()), (account.getPassword().trim())) == null) {
            throw new ErrorException("Account không tồn tại");
        }
        return new ResponseEntity<>(accountService.findAccountsByUsername(account.getUsername()), HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> exceptionHandler(Exception ex) {
        ErrorResponse error = new ErrorResponse();
        error.setMessage(ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.OK);
    }
}
