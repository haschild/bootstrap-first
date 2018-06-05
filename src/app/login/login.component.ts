import { Component, OnInit } from '@angular/core';

import { User } from '../basic-data/user';
// 添加校验
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  // 验证用FormGroup 自定义校验，减少代码量
  userGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
