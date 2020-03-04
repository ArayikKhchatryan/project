import {Directive, ElementRef, HostListener} from '@angular/core';
import {inspect} from 'util';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(private el: ElementRef) { }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.appInput('red', '#E0FFFF');
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.appInput(null, null);
  // }

  @HostListener('focus') focus() {
    this.appInput( 'firebrick', '#E0FFFF');
  }

  @HostListener('blur') blur() {
    this.appInput(null, null);
  }

  private appInput(color: string, bColor?: string) {
    this.el.nativeElement.style.color = color;
    // if(bColor){
    //   this.el.nativeElement.style.backgroundColor = bColor;
    // }
    this.el.nativeElement.style.backgroundColor = bColor;
  }

}
