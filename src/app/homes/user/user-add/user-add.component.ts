import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.';
import { User } from '../../../mock-data/user';
import { Location } from '@angular/common';
import { FormEvent } from '../../../form-validate/form.event';
// 添加校验
import { CustomValidators } from '../../../form-validate/form.validate';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService,
    private location: Location,
    private fb: FormBuilder) { }
  // formGroup
  userGroup: FormGroup;
  ngOnInit() {
    // users 变量赋值
    this.userService.getUsers().subscribe( users => this.users = users);
    this.createGroup();
    console.log(this.users);
  }
  add(name: string) {
    if (!this.userGroup.valid) {
      return false;
    }
    name = name.trim();
    const id: number = Math.floor(Math.random() * 10);
    if (!name) { return; }
    // 会自动将id 的值增加
    // this.heroService.addHero({ name: name, id: id} as Hero)
    // as 在 typeScript 可以强制转换类型
    this.userService.add({ name: name} as User)
      .subscribe((user) => {
        this.users.unshift(user);
        this.location.back();
      });
  }
  // 设置浏览器后退按钮
  goBack() {
    this.location.back();
  }


  createGroup() {
    this.userGroup = this.fb.group({
      name: ['', [Validators.required, CustomValidators.validatorName(null)]],
    });
  }
  // 点击 esc 清除 Input 的数据
  clearInput() {
    const ESC_KEY = 27;
    const target = document.getElementById('name') as HTMLInputElement;
    if (!target) { return; }
    const str = FormEvent.addlistener('keydown', target)
      .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
          target.value = '';
        }
      });
    console.log(str);
  }

}
