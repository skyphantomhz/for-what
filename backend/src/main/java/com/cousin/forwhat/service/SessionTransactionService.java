package com.cousin.forwhat.service;

import com.cousin.forwhat.DTO.TransactionDTO;
import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface SessionTransactionService {


    List<SessionTransaction> findAllSessionTransactions();

    SessionTransaction findSessionTransaction(long id);

    void deleteSessionTransaction(long id);

    SessionTransaction updateSessionTransaction(SessionTransaction sessionTransaction);
    TransactionDTO createNewSessionTransaction(TransactionDTO transactionDTO);

    void deleteSessionTransaction(Long id);

    TransactionDTO updateSessionTransaction(Long id,TransactionDTO transactionDTO);

    TransactionDTO getTransactionById(Long id);
}
