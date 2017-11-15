package com.cousin.forwhat.service;

import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface SessionTransactionService {
    SessionTransaction createNewSessionTransaction(SessionTransaction sessionTransaction);

    List<SessionTransaction> findAllSessionTransactions();

    SessionTransaction findSessionTransaction(long id);

    void deleteSessionTransaction(long id);

    SessionTransaction updateSessionTransaction(SessionTransaction sessionTransaction);
}
