import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, stagger, query, sequence, group } from '@angular/animations';
import { navAnimations } from '../../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    navAnimations
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
