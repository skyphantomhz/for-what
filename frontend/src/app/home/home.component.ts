import {Component, OnInit} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";
import { DialogTransactionDialog } from "../transaction/transaction.component";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {LoginService} from "../service/login.service";
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source: LocalDataSource;
  settings = {
    hideSubHeader: true,

    columns: {
      id: {
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
      date: {
        title: 'Date',
        filter: false
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
    },
    {
      id: 2,
      description: "Leanne Graham",
      amount: "10000",
      type: "out",
      date: "22/12/1996"
    },
    {
      id: 3,
      description: "Leanne Graham",
      amount: "10000",
      type: "out",
      date: "22/12/1996"
    },
    {
      id: 4,
      description: "Leanne Graham",
      amount: "10000",
      type: "out",
      date: "22/12/1996"
    },
    {
      id: 5,
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
  constructor(public dialog: MatDialog,private loginService: LoginService, private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
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
        field: 'Id',
        search: query
      },
      {
        field: 'Description',
        search: query
      },
      {
        field: 'Amount',
        search: query
      },
      {
        field: 'Type',
        search: query
      },
      {
        field: 'Date',
        search: query
      }
    ], true);
  }

  logOut() {
    // this.loginService.SetLogin(false);
    this.authenticationService.logout();
    // localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
