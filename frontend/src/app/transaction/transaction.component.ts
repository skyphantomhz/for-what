import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { DateAdapter, NativeDateAdapter, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Transaction } from '../_models/transaction';
import { TransactionService } from '../_services/Transactions.Service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class DialogTransactionDialog implements OnInit {

  transaction: Transaction;
  errorMessage: any;
  transactionForm: FormGroup;
   newTransaction: Transaction;
  contentFormControl = new FormControl('', [
    Validators.required]);
  amountFormControl = new FormControl('', [
    Validators.required]);
  dateFormControl = new FormControl('', [
    Validators.required]);
  selectedValue: string;

  types = [
    { value: '0', viewValue: 'income' },
    { value: '1', viewValue: 'outcome' }
  ];

  getErrorMessage1() {
    return this.contentFormControl.hasError('required') ? 'You must enter content of transaction' : '';
    //  this.contentFormControl.hasError('email') ? 'Not a valid email' : '';

  }
  getErrorMessage2() {
    return this.contentFormControl.hasError('required') ? 'You must enter amount of income' : '';
  }
  getErrorMessage3() {
    return this.contentFormControl.hasError('required') ? 'You must enter date of income' : '';
  }


  constructor(public dialogRef: MatDialogRef<DialogTransactionDialog>,

    private transactionService: TransactionService,
    private route: Router,
    private _fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.transaction = new Transaction();
        this.newTransaction = new Transaction();

    this.transactionForm = this._fb.group(
      {
        type: this._fb.control('', Validators.required),
        desciption: this._fb.control('', Validators.required),
        amount: this._fb.control('', Validators.required),
        dateTime: this._fb.control('', Validators.required),
        // linkPreview: this._fb.control('', Validators.required),

      }
    );

  }
 
  onSubmit(transactionForm: NgForm, event: Event) {
    event.preventDefault();
    // this.newTransaction.usernameId = 1;
    this.newTransaction = transactionForm.value;
   // console.log(this.newTransaction.day.getDate()+"/"+this.newTransaction.day.getMonth());
    // console.log(this.transaction);
    // console.log(this.newTransaction);
    this.transactionService.addTransaction(this.newTransaction)
      .subscribe(json => {
        console.log(json);
        this.onNoClick();
        this.route.navigate(['/homepage']);
      },
      error => {
        this.errorMessage = <any>error;
      });


    // this.coverImage.uploadAll();
  }
  // searchCategory(event: any): void {
  //   this.category = new Categories();
  //   this.category = this.categories.find(item => item.categoryId === event.categoryId);
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }
}