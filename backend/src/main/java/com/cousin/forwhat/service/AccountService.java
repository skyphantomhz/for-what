package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Account;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AccountService {
    Account register(Account account);

    List<Account> findAllAccounts();

    void deleteAccount(Long id);

    Account updateAccount(Long id,Account account);

    Account findAccountsByUsername(String username);

    Account findAccountsByUsernameAndPassword(String username, String password);

    boolean existUsernameAccount(Account account);
}
