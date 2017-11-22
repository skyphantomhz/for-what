package com.cousin.forwhat.DTO;

import com.cousin.forwhat.entity.Account;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TransactionDTO {
    private Long SessionTransactionId;
    private String username;
    private Long usernameId;
    private String type;
    private String desciption;
    private long amount;
    private String datetime;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getUsernameId() {
        return usernameId;
    }

    public void setUsernameId(Long usernameId) {
        this.usernameId = usernameId;
    }

    public Long getSessionTransactionId() {
        return SessionTransactionId;
    }

    public void setSessionTransactionId(Long sessionTransactionId) {
        SessionTransactionId = sessionTransactionId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDesciption() {
        return desciption;
    }

    public void setDesciption(String desciption) {
        this.desciption = desciption;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }


    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }
}