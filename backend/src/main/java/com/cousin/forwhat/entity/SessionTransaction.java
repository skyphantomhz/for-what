package com.cousin.forwhat.entity;

import javax.persistence.*;

@Entity
public class SessionTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long SessionTransactionId;

    @ManyToOne
    private Account account;
    private String type;
    private long amount;
    private String datetime;

    public SessionTransaction() {
    }

    public long getSessionTransactionId() {
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

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }
}
