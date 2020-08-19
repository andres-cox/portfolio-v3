import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {
  @HostBinding('@.disabled') animation: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const windowSize = window.innerWidth;
    this.animation = (windowSize < 768) ? true : false;
  }


}
