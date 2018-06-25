import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';

import { UserService } from '../user-service.';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  editing = {};
  rows = [];
  selected = [];
  columns: any[] = [
    { prop: 'name' },
    { name: 'id' },
  ];
  constructor(private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    // this.fetch((data) => {  直接通过 js 代码获取 js 文件数据
    //   this.rows = data;
    // });
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users) => {
        this.rows = users;
      });
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
  }


  onSelect({ selected }) {

    this.router.navigate(['/homes/userDetail/' + selected[0].id]);
    console.log('Select Event', selected, this.selected);
  }

  // 新增用戶
  redirectAdd() {
    this.router.navigate(['/homes/userAdd']);
  }
  // 跳转到修改界面
  redirectUpdate(id: any) {
    this.router.navigate(['/homes/userUpdate/' + id]);
  }

  onActivate(event) {
    // 当滑动的时候就会执行该事件。
    // console.log('Activate Event', event);
  }


}
