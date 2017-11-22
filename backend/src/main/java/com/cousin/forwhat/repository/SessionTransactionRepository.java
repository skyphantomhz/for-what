package com.cousin.forwhat.repository;

import com.cousin.forwhat.entity.SessionTransaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionTransactionRepository extends CrudRepository<SessionTransaction, Long> {
}
