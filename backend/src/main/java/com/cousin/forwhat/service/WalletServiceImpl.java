package com.cousin.forwhat.service;

import com.cousin.forwhat.entity.Wallet;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class WalletServiceImpl implements WalletService {
    @Override
    public Wallet createNewWallet(Wallet wallet) {
        return null;
    }

    @Override
    public List<Wallet> findAllWallets() {
        return null;
    }

    @Override
    public void deleteWallet(long id) {

    }

    @Override
    public Wallet updateWallet(Wallet wallet) {
        return null;
    }
}
