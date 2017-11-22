package com.cousin.forwhat.controller;

import com.cousin.forwhat.DTO.TransactionDTO;
import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.service.AccountService;
import com.cousin.forwhat.service.SessionTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;

@RestController
@RequestMapping(value = "/api/transactions")
public class TransactionController {
    @Autowired
    private SessionTransactionService sessionTransactionService;

    @CrossOrigin
    @GetMapping()
    public ResponseEntity getAllSessionTransaction() {
        return new ResponseEntity<>(sessionTransactionService.findAllSessionTransactions(), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping()
    public ResponseEntity createNewTransaction(@Validated @RequestBody TransactionDTO item) throws Exception {
        return new ResponseEntity<>(sessionTransactionService.createNewSessionTransaction(item), HttpStatus.CREATED);
    }
}
