package com.cousin.forwhat.service;

import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import com.cousin.forwhat.repository.SessionTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class SessionTransactionServiceImpl implements SessionTransactionService  {

    @Autowired
    private SessionTransactionRepository sessionTransactionRepository;
    @Override
    public SessionTransaction createNewSessionTransaction(SessionTransaction sessionTransaction) {
        sessionTransactionRepository.save(sessionTransaction);
        return null;
    }

    @Override
    public List<SessionTransaction> findAllSessionTransactions() {
        List<SessionTransaction> sessionTransactions = new ArrayList<>();
        sessionTransactionRepository.findAll().forEach(sessionTransactions::add);
        return sessionTransactions;
    }

    @Override
    public SessionTransaction findSessionTransaction(long id) {
        return sessionTransactionRepository.findOne(id);
    }

    @Override
    public void deleteSessionTransaction(long id) {

    }

    @Override
    public SessionTransaction updateSessionTransaction(SessionTransaction sessionTransaction) {
        return null;
    }


}
