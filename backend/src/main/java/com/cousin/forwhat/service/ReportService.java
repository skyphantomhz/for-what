package com.cousin.forwhat.service;

import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface ReportService {
    StringBuffer getReportByMonth(long usernameID, Date dateReport);
    StringBuffer getReportOnYear(long usernameId);
}
