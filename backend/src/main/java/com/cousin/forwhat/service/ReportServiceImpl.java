package com.cousin.forwhat.service;

import com.cousin.forwhat.pojo.ReportByMonthPOJO;
import com.cousin.forwhat.pojo.ReportInOutComePOJO;
import com.cousin.forwhat.repository.SessionTransactionRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {
    @Autowired
    private SessionTransactionRepository sessionTransactionRepository;

    @Override
    public StringBuffer getReportByMonth(long usernameID, Date dateReport) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(dateReport);
        int month = (cal.get(Calendar.MONTH)+1);
        List<ReportByMonthPOJO> getReportInComeByMonth = new ArrayList<>();
        List<ReportByMonthPOJO> getReportOutComeByMonth = new ArrayList<>();
        sessionTransactionRepository.getReportByMonthAndTypeTransactionIncome(usernameID,month).forEach(getReportInComeByMonth::add);
        sessionTransactionRepository.getReportByMonthAndTypeTransactionOutcome(usernameID,month).forEach(getReportOutComeByMonth::add);
        StringBuffer jsonStr=new StringBuffer("[{\"name\":\"income\"");
        if(getReportInComeByMonth.size()>0){
            jsonStr.append(",\"series\":[{\"value\":" + getReportInComeByMonth.get(0).getTotal()+",\"name\":"+ getReportInComeByMonth.get(0).getDate()+"}");
            for(int i=1;i<getReportInComeByMonth.size();i++){
                jsonStr.append(",{\"value\":" + getReportInComeByMonth.get(i).getTotal()+",\"name\":"+ getReportInComeByMonth.get(i).getDate()+"}");
            }
            jsonStr.append("]");
        }
        jsonStr.append("},{\"name\":\"outcome\"");
        if(getReportOutComeByMonth.size()>0){
            jsonStr.append(",\"series\":[{\"value\":" + getReportOutComeByMonth.get(0).getTotal()+",\"name\":"+ getReportOutComeByMonth.get(0).getDate()+"}");
            for(int i=1;i<getReportOutComeByMonth.size();i++){
                jsonStr.append(",{\"value\":" + getReportOutComeByMonth.get(i).getTotal()+",\"name\":"+ getReportOutComeByMonth.get(i).getDate()+"}");
            }
            jsonStr.append("]");
        }
        jsonStr.append("} ]");
        System.out.println(jsonStr);
        return jsonStr;
    }
    @Override
    public StringBuffer getReportOnYear(long usernameId) {
        List<ReportInOutComePOJO> reportOnYearInCome = new ArrayList<>();
        List<ReportInOutComePOJO> reportOnYearOutCome = new ArrayList<>();
        sessionTransactionRepository.getReportInComeOnYear(usernameId).forEach(reportOnYearInCome::add);
        sessionTransactionRepository.getReportOutComeOnYear(usernameId).forEach(reportOnYearOutCome::add);
        StringBuffer jsonStr=new StringBuffer("[");
        int m=0,n=0;
        for(int i=0;i<12;i++){
            if(i!=0){
                jsonStr.append(",");
            }
            jsonStr.append("{\"name\":\""+(i+1)+"\",\"series\":[");
            System.out.print("\n"+(i+1)+"\t");
            System.out.print(reportOnYearInCome.get(m).getMonth()+": "+reportOnYearInCome.get(m).getTotal()+"\t");
            if(reportOnYearInCome.get(m).getMonth()==(i+1)){
                jsonStr.append("{\"name\":\"income\", \"value\":"+reportOnYearInCome.get(m).getTotal()+"}");
                if(m<reportOnYearInCome.size()-1) {
                    m++;
                }
            }
            System.out.print(reportOnYearOutCome.get(n).getMonth()+": "+reportOnYearOutCome.get(n).getTotal()+"\t");
            if(reportOnYearOutCome.get(n).getMonth()==(i+1)){
                jsonStr.append(",{\"name\":\"outcome\", \"value\":"+reportOnYearOutCome.get(n).getTotal()+"}");
                if(n<reportOnYearOutCome.size()-1) {
                    n++;
                }
            }
            System.out.print("\n");
            jsonStr.append("]}");
        }
        jsonStr.append("]");
        System.out.println(jsonStr);
        return jsonStr;
    }
}
