package com.cousin.forwhat.controller;

import com.cousin.forwhat.service.ReportService;
import com.cousin.forwhat.service.SessionTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping(value = "/api/report")
public class ReportController {
    @Autowired
    private ReportService reportService;

    @CrossOrigin
    @GetMapping(value = "/bymonth/{id_username}")
    public ResponseEntity getReportByMonthIncome(@PathVariable("id_username") long id_username) {
        return new ResponseEntity<>(reportService.getReportByMonth(id_username,new Date()), HttpStatus.OK);
    }


    @CrossOrigin
    @GetMapping(value = "/byyear/{id_username}")
    public ResponseEntity getReportIncomeOnYear(@PathVariable("id_username") long id_username) {
        return new ResponseEntity<>(reportService.getReportOnYear(id_username), HttpStatus.OK);
    }
}
