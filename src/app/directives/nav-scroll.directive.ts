import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'black';
  }

}
