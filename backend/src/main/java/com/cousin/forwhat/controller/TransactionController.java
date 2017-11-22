package com.cousin.forwhat.controller;

import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.service.AccountService;
import com.cousin.forwhat.service.SessionTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.Date;

@RestController
@RequestMapping(value = "/api/transactions")
public class TransactionController {
    @Autowired
    private SessionTransactionService sessionTransactionService;

    @GetMapping()
    public ResponseEntity getAllSessionTransaction() {
        return new ResponseEntity<>(sessionTransactionService.findAllSessionTransactions(), HttpStatus.OK);
    }
}
