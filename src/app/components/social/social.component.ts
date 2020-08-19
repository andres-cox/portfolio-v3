import { Component, OnInit, HostBinding } from '@angular/core';
import { socialAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [socialAnimations]
})
export class SocialComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }



}
