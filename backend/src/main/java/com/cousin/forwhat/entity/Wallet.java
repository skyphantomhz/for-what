package com.cousin.forwhat.entity;

import javax.persistence.*;

@Entity
public class Wallet {
    @Id
    @GeneratedValue
    private int walletId;

    @OneToOne
    private Account account;
    private long currentMonney;
    private long totalIncome;
    private long totalOutcome;

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public long getCurrentMonney() {
        return currentMonney;
    }

    public void setCurrentMonney(long currentMonney) {
        this.currentMonney = currentMonney;
    }

    public long getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(long totalIncome) {
        this.totalIncome = totalIncome;
    }

    public long getTotalOutcome() {
        return totalOutcome;
    }

    public void setTotalOutcome(long totalOutcome) {
        this.totalOutcome = totalOutcome;
    }

    public int getWalletId() {
        return walletId;
    }

    public void setWalletId(int walletId) {
        this.walletId = walletId;
    }

    public Wallet() {

    }
}
