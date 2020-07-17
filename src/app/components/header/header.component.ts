import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('list1', [
  //     state('', style({
  //       opacity: 1,
  //       transform: 'translateY(0)'
  //     })),
  //     transition('void => *', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateY(-100px)'
  //       }),
  //       animate(600)
  //     ])
  //   ]),
  // ]
  animations: [
    trigger('list1', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-200, [
            animate('1700ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  openSideNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.openSideNavbar = !this.openSideNavbar;
  }
}
