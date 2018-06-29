import { Component, OnInit } from '@angular/core';
// import { Accordion} from './menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Accordion($('#accordion'), false);
  }




  /**
     *
     * @param {Object} el any 元素
     * @param {Object} multiple true：可以打开 多个子菜单，false： 只能打开一个子菜单
   */

   Accordion(el: any, multiple: boolean): void {
    multiple = multiple || false;

    // Variables privadas
    const links: any = el.find('.link');
    // Evento
     links.on('click', { el: el, multiple: multiple }, this.dropdown);
  }
  dropdown(e: any) {
    const $el = e.data.el;
    const $this: any = $(this);  // 这个是 this 指点击的元素
    const $next: any = $this.next();

    $next.slideToggle(200);  // 切换显示隐藏，写毫秒速控制显示隐藏
    $this.parent().toggleClass('open'); //  切换 css名称

    // 判断是否折叠
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
  }


}


