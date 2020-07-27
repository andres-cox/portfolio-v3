import { Component, OnInit } from '@angular/core';
import { animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [animations]
})
export class CardComponent implements OnInit {
  state: string = 'inactive';
  constructor() { }

  ngOnInit(): void {
  }

  onAppear() {
    this.state = 'active';
  }
}
