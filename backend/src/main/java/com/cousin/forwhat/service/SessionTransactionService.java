package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.entity.SessionTransaction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SessionTransactionService {
    SessionTransaction createNewSessionTransaction(SessionTransaction sessionTransaction);

    List<SessionTransaction> findAllSessionTransactions();

    void deleteSessionTransaction(long id);

    SessionTransaction updateSessionTransaction(SessionTransaction sessionTransaction);
}
