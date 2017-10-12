package com.cousin.forwhat.repository;

import com.cousin.forwhat.entity.Wallet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends CrudRepository<Wallet,Long> {
}
