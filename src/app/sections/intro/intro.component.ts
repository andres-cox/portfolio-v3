import { Component, OnInit } from '@angular/core';
import { introAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [introAnimations]
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
