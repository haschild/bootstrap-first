import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() appBorderColor: boolean;
  constructor() { }

  ngOnInit() {
  //  this.el.nativeElement
   }

  }



