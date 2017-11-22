package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Account;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AccountService {
    Account createNewAccount(Account account);

    List<Account> findAllAccounts();

    Account findAccount(long id);

    void deleteAccount(long id);

    Account updateAccount(Account account);
}
