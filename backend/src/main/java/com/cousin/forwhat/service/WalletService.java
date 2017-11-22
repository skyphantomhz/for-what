package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Account;
import com.cousin.forwhat.entity.Wallet;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WalletService {
    Wallet createNewWallet(Wallet wallet);

    List<Wallet> findAllWallets();

    void deleteWallet(long id);

    Wallet updateWallet(Wallet wallet);
}
