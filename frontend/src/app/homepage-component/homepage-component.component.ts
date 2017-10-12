import {Component, OnInit} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.css']
})
export class HomepageComponentComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
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
}
