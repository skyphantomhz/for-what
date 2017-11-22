package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {


    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Account createNewAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public List<Account> findAllAccounts() {
        List<Account> accounts = new ArrayList<>();
        accountRepository.findAll().forEach(accounts::add);
        return accounts;

    }

    @Override
    public Account findAccount(long id) {
        return accountRepository.findOne(id);
    }

    @Override
    public void deleteAccount(long id) {

    }

    @Override
    public Account updateAccount(Account account) {
        return null;
    }
}
