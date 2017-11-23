package com.cousin.forwhat.repository;

import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.entity.SessionTransaction;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SessionTransactionRepository extends CrudRepository<SessionTransaction, Long> {

    @Query(value = "SELECT DAY(date_time) as date,SUM(amount) as total FROM session_transaction WHERE account_username_id=?1 and month(date_time)=?2 and type='income' GROUP BY date_time", nativeQuery = true)
    List<ReportByMonthPOJO> getReportByMonthAndTypeTransactionIncome(@Param("username_id") long usernameId, @Param("month_get_report") long monthReport);

    @Query(value = "SELECT DAY(date_time) as date,SUM(amount) as total FROM session_transaction WHERE account_username_id=?1 and month(date_time)=?2 and type='outcome' GROUP BY date_time", nativeQuery = true)
    List<ReportByMonthPOJO> getReportByMonthAndTypeTransactionOutcome(@Param("username_id") long usernameId, @Param("month_get_report") long monthReport);

    @Query(value = "SELECT MONTH(date_time) as month, SUM(amount) as total FROM session_transaction WHERE account_username_id=?1 and type='income' and YEAR(date_time)=YEAR(CURDATE()) GROUP BY month", nativeQuery = true)
    List<ReportInOutComePOJO> getReportInComeOnYear(@Param("username_id") long usernameId);


    @Query(value = "SELECT MONTH(date_time) as month, SUM(amount) as total FROM session_transaction WHERE account_username_id=?1 and type='outcome' and YEAR(date_time)=YEAR(CURDATE()) GROUP BY month", nativeQuery = true)
    List<ReportInOutComePOJO> getReportOutComeOnYear(@Param("username_id") long usernameId);

    @Query(value = "SELECT * FROM session_transaction WHERE account_username_id= :account_username_id", nativeQuery = true)
    List<SessionTransaction> findTransactionById(@Param("account_username_id") long account_username_id);
}

