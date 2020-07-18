import { Component, OnInit } from '@angular/core';
import { menutest } from 'src/app/shared/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [menutest]
})
export class AboutComponent implements OnInit {
  state: string = 'inactive';
  constructor() { }

  ngOnInit(): void {
  }

  onAppear() {

    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    console.log('about', this.state);
  }

}
