import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormEvent } from '../../form-validate/form.event';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  protected aaa: string;
  constructor() { }
  arr = Observable.of(1, 2, 3);


  myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };



  ngOnInit() {
    this.arr.subscribe(this.myObserver);

    this.clearInput();


  }

// 点击 esc 清除 Input 的数据
  clearInput() {
    const ESC_KEY = 27;
    const target = document.getElementById('name') as HTMLInputElement;
    const str = FormEvent.addlistener('keydown', target)
      .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
          target.value = '';
        }
      });
    console.log(str);
  }

}


