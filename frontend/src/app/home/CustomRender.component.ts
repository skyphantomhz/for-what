import { Component, Input, OnInit } from '@angular/core';
import {ViewCell} from "ng2-smart-table";

@Component({
  template: `
    {{value | date:'shortDate'}} 
  `,
})
export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: String;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    // this.renderValue = this.value.toString();
  }

}