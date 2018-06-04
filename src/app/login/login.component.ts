import { Component, OnInit } from '@angular/core';

import { User} from '../basic-data/user';
// 添加校验
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  heroForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
