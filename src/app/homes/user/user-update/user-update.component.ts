import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.';
import { User } from '../../../mock-data/user';
import { Location } from '@angular/common';
import { FormEvent } from '../../../form-validate/form.event';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(private router: ActivatedRoute,
  private userService: UserService,
private location: Location) { }

   user: User;
  ngOnInit() {
    this.clearInput();
    this.getHero();
  }
  getHero(): void {
    // js 中 +string = number 这个我还真没注意到
    const id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }
  // 修改用户
  update() {
    this.userService.updateUser(this.user).subscribe(() => this.location.back());
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

  goBack(){
    this.location.back();
  }
}
