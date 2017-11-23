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

//    private static final Logger logger = Logger.getLogger(AccountServiceImpl.class);

    @Autowired
    private AccountRepository accountRepository;

//    @Bean
//    public PasswordEncoder getPasswordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    @Override
    public Account register(Account account) {
//        account.setPassword(getPasswordEncoder().encode(account.getPassword()));
        return accountRepository.save(account);
    }

    @Override
    public List<Account> findAllAccounts() {
        List<Account> accounts = new ArrayList<>();
        accountRepository.findAll().forEach(accounts::add);
        return accounts;
    }

    @Override
    public void deleteAccount(Long id) {
        Account deleted = accountRepository.findOne(id);
        accountRepository.delete(deleted);
    }

    @Override
    public Account updateAccount(Long id, Account account) {
        account.setUsernameId(id);
//        account.setPassword(getPasswordEncoder().encode(account.getPassword()));
        return accountRepository.save(account);
    }

    @Override
    public Account findAccountsByUsername(String username) {
        return accountRepository.findAccountByUsername(username);
    }

    @Override
    public Account findAccountsByUsernameAndPassword(String username, String password) {
        return accountRepository.findAccountByUsernameAndPassword(username, password);
    }

    @Override
    public boolean existUsernameAccount(Account account) {
        Account ac = accountRepository.existAccount(account.getUsername(), account.getPassword());
        if (ac != null) {
            return true;
        } else {
            return false;
        }
    }
}
