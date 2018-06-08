import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
declare let $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  editing = {};
  rows = [];

  constructor() {
  }

  ngOnInit() {
    this.fetch((data => {
      this.rows = data;
    })
  }

  fetch(cb) {
    $.ajax({
      url: 'assets/company.json',
      type: 'GET',
      dataType: 'JSON',
      success: function (data, xhr) {
        cb(data);
      },
      error: function (xhr, error, message) {
        alert(error);
        alert(message);
      }
    });
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/company.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }



}
