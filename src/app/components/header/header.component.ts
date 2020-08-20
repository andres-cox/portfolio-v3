import { Component, OnInit } from '@angular/core';
import { navAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [navAnimations]
})
export class HeaderComponent implements OnInit {
  openSideNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.openSideNavbar = !this.openSideNavbar;

    document.body.style.overflowY = (this.openSideNavbar) ? "hidden" : "initial";
  }

  hideNav() {
    this.openSideNavbar = false;
    document.body.style.overflowY = "initial";
  }

}
