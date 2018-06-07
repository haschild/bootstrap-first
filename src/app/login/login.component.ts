import { Component, OnInit } from '@angular/core';

import { User } from '../mock-data/user';
// 添加校验
import { CustomValidators } from '../form-validate/form.validate';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user: User = new User();
  saveCurrent: User;
  // 验证用FormGroup 自定义校验，减少代码量
  userGroup: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.createGroup();
    this.userGroup.setValue({
      email: 'zhoulin_x@126.com', password: 'wy123456'
    });
  }

  login() {

    if (this.userGroup.valid) {
      this.router.navigate(['/homes']);
    } else {
      alert('请真确填写');
    }
  }
  createGroup() {
    this.userGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email, CustomValidators.validatorStr(new RegExp(/[#$%^&*]/g))]],
      password: ['', [Validators.required, Validators.minLength(6), CustomValidators.validatorPassword(/[a-zA-Z]+/g)]]
    });
  }
  // 记住用户名和密码
  rememberUser(event: Event) {
      this.saveCurrent = Object.assign({}, this.userGroup.value);
    this.userGroup.setValue({
      email: this.saveCurrent.email,
      password: this.saveCurrent.password,

    });
  }





}