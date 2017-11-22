package com.cousin.forwhat.entity;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
public class SessionTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long SessionTransactionId;

    @ManyToOne
    private Account account;
    private String type;
    private long amount;

    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateTime;

    public SessionTransaction() {
    }
    public void setSessionTransactionId(Long sessionTransactionId) {
        SessionTransactionId = sessionTransactionId;
    }

    public Long getSessionTransactionId() {
        return SessionTransactionId;
    }

    public void setSessionTransactionId(long sessionTransactionId) {
        SessionTransactionId = sessionTransactionId;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }


    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
