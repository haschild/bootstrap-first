import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  protected aaa: string;
  constructor() { }
  arr = Observable.of(1, 2, 3);
  ESC_KEY = 27;

  myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  formEvent(eventName: string, target: HTMLInputElement) {
    return new Observable((observable => {
    const fun = (e) => observable.next(e);
    target.addEventListener(eventName, fun);

    return () => {
      target.removeEventListener(eventName, fun);
    };
  }));
}

ngOnInit() {
  this.arr.subscribe(this.myObserver);

  const target = document.getElementById('name') as HTMLInputElement;
  const str = this.formEvent('keydown', target )
    .subscribe((e: KeyboardEvent) => {
      if (e.keyCode === this.ESC_KEY) {
        target.value = '';
      }
    });

    console.log(str);
}

}


