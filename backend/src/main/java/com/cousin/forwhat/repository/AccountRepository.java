package com.cousin.forwhat.repository;

import com.cousin.forwhat.entity.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findAccountByUsernameAndPassword(String username, String password);

    Account findAccountByUsername(String username);

    @Query(value = "SELECT * FROM account WHERE username = :username LIMIT 1", nativeQuery = true)
    Account existAccount(@Param("username") String username);
}
