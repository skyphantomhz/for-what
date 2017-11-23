import {Component, OnInit} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";
import { DialogTransactionDialog } from "../transaction/transaction.component";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {TransactionService} from '../_services/Transactions.Service';
import { Transaction } from "../_models/transaction";
import { Router } from "@angular/router";
import { CustomRenderComponent } from "./CustomRender.component";

@Component({
  selector: 'app-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: Transaction[];
  source: LocalDataSource;
  errorMessage: any;
  settings = {
    hideSubHeader: true,

    columns: {
        sessionTransactionId: {
        title: 'Id',
        filter: false
      },
      description: {
        title: 'Description',
        filter: false
      },
      amount: {
        title: 'Amount',
        filter: false
      },
      type: {
        title: 'Type',
        filter: false
      },
      dateTime: {
        title: 'Date',
        filter: false,
        type: 'custom',
        renderComponent: CustomRenderComponent
      }
    },
    actions: {
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: `<i class="fa fa-pencil fa-lg pr-5 pr-lg-5 pr-md-5 pr-sm-5" aria-hidden="true"></i>`,
        },
        {
          name: 'delete',
          title: `<i class="fa fa-trash fa-lg" aria-hidden="true"></i>`,
        }
      ],
      columnTitle: 'Action'
    }
  };
  data = [
    {
      id: 1,
      description: "Leanne Graham",
      amount: "10000",
      type: "out",
      date: "22/12/1996"
    }
  ]
  months = [
    {value: 'jan', viewValue: 'January'},
    {value: 'feb', viewValue: 'February'},
    {value: 'mar', viewValue: 'March'},
    {value: 'apr', viewValue: 'April'},
    {value: 'may', viewValue: 'May'},
    {value: 'jun', viewValue: 'June'},
    {value: 'jul', viewValue: 'July'},
    {value: 'aug', viewValue: 'August'},
    {value: 'sep', viewValue: 'September'},
    {value: 'oct', viewValue: 'October'},
    {value: 'nov', viewValue: 'November'},
    {value: 'dec', viewValue: 'December'},
  ];
  constructor(private transactionService: TransactionService, public dialog: MatDialog, private route : Router) {
  }

  ngOnInit(): void {
    this.transactions = [];
    this.transactionService.getTransactions(parseInt(localStorage.getItem('usernameId')))
      .subscribe( transactions => {
          this.transactions = transactions;
          this.source = new LocalDataSource(this.transactions);
        },
        error => this.errorMessage = <any>error
      );
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogTransactionDialog, {
      height: '440px',
       width: '550px'
    });
  }
  onSearch(query: string = '') {

    
    if (query === '') {
      query = '2';
    }
 
    this.source.setFilter([
      {
        field: 'sessionTransactionId',
        search: query
      },
      {
        field: 'description',
        search: query
      },
      {
        field: 'amount',
        search: query
      },
      {
        field: 'type',
        search: query
      },
      {
        field: new Date('dateTime').toString(),
        search: query
      }
    ], false);
  }
}