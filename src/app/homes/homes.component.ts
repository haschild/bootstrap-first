import { Component, OnInit } from '@angular/core';
// 导入路由事件
import { Router, NavigationEnd } from '@angular/Router';
@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  constructor(
    // private router: Router

  ) { }

  ngOnInit() {
    // this.router.events.subscribe(param => {

    //   // 这里还监听特定的路由事件
    //   if (param instanceof NavigationEnd) {
    //     // alert('路由导航结束');
    //   }
    //   console.log(param);
    // });



  }

}
