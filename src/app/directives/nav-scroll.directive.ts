import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {
  @HostBinding('style.top') top: string = '0px';
  @HostBinding('style.boxShadow') boxShadow: string = 'none';

  prevScrollpos = window.pageYOffset;

  @HostListener('window:scroll', ['$event']) scrollEvent(event: Event) {
    let currentScrollPos = window.pageYOffset;

    this.boxShadow = (window.pageYOffset == 0) ? 'none' : '2px 2px 20px rgba(0, 0, 0, .5)'

    this.top = (this.prevScrollpos > currentScrollPos) ? '0' : '-75px';

    this.prevScrollpos = currentScrollPos;
  }

}
