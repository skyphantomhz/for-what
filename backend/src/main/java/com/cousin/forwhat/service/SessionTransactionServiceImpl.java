package com.cousin.forwhat.service;

import com.cousin.forwhat.DTO.TransactionDTO;
import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import com.cousin.forwhat.repository.AccountRepository;
import com.cousin.forwhat.repository.SessionTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class SessionTransactionServiceImpl implements SessionTransactionService  {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private SessionTransactionRepository sessionTransactionRepository;

    @Override
    public List<SessionTransaction> findAllSessionTransactionsByUsername(long usernameId) {
        List<SessionTransaction> sessionTransactions = new ArrayList<>();
        sessionTransactionRepository.findTransactionById(usernameId).forEach(sessionTransactions::add);
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

    //
    private TransactionDTO transferEntitytoDTO(SessionTransaction item) {
        TransactionDTO itemDTO = new TransactionDTO();
        itemDTO.setSessionTransactionId(item.getSessionTransactionId());
        itemDTO.setAmount((long) item.getAmount());
        itemDTO.setType(item.getType());
        itemDTO.setDesciption(item.getDescription());
        itemDTO.setDatetime(item.getDateTime().toString ());
        long idAccount = item.getAccount().getUsernameId();
        itemDTO.setUsernameId(idAccount);
        String usrname = item.getAccount().getUsername();
        itemDTO.setUsername(usrname);
        return itemDTO;
    }


    private SessionTransaction transferDTOtoEntity(TransactionDTO itemDTO) {
        SessionTransaction item = new SessionTransaction();
        item.setSessionTransactionId(itemDTO.getSessionTransactionId());
        item.setAmount((long) itemDTO.getAmount());
        item.setType(itemDTO.getType());
        item.setDescription(itemDTO.getDesciption());
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        try {
            Date date = sdf.parse(itemDTO.getDatetime());
            item.setDateTime(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }


        Account account = accountRepository.findOne(itemDTO.getUsernameId());
        item.setAccount(account);

        return item;
    }



    @Override
    public TransactionDTO createNewSessionTransaction(TransactionDTO transactionDTO) {
        SessionTransaction item = transferDTOtoEntity(transactionDTO);
        SessionTransaction done = sessionTransactionRepository.save(item);
        transactionDTO = transferEntitytoDTO(done);
        return transactionDTO;
    }

    @Override
    public void deleteSessionTransaction(Long id) {

    }

    @Override
    public TransactionDTO updateSessionTransaction(Long id, TransactionDTO transactionDTO) {
        return null;
    }

    @Override
    public TransactionDTO getTransactionById(Long id) {
        return null;
    }

}
