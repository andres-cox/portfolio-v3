import { Component, OnInit, HostBinding } from '@angular/core';
import { socialAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [socialAnimations]
})
export class SocialComponent implements OnInit {
  @HostBinding('@.disabled') animation: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const windowSize = window.innerWidth;

    this.animation = (windowSize < 768) ? true : false;
  }



}
