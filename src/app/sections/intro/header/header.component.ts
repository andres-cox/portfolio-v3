import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
