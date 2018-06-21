import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormEvent } from '../../../form-validate/form.event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user-service.';

import { User } from '../../../mock-data/user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(private router: ActivatedRoute, // 保存着实例路由的信息，可以在路由中提取参数感兴趣。
    private location: Location, // angular 和 浏览器有关系，可以实现后退功能
    private userService: UserService) { }

  ngOnInit() {
    this.getHero();
    this.clearInput();
  }

  getHero(): void {
    // js 中 +string = number 这个我还真没注意到
    const id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }


  // 设置浏览器后退按钮
  goBack() {
    this.location.back();
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


