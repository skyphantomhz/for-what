import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, NativeDateAdapter, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class DialogTransactionDialog {

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
    return this.contentFormControl.hasError('required') ? 'You must enter content of transaction' :'';
      //  this.contentFormControl.hasError('email') ? 'Not a valid email' : '';
       
  }
     getErrorMessage2() {
    return this.contentFormControl.hasError('required') ? 'You must enter amount of income' :'';    
  }
     getErrorMessage3() {
    return this.contentFormControl.hasError('required') ? 'You must enter date of income' :'';      
  }
  constructor( public dialogRef: MatDialogRef<DialogTransactionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
     onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
 
}
