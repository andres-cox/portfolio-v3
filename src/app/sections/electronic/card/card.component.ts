import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { animations } from 'src/app/shared/animations';
import { IElecProject } from 'src/app/models/elec-project.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [animations]
})
export class CardComponent implements OnInit {
  @HostBinding('@.disabled') animation: boolean = false;
  @Input() elecCard: IElecProject;
  state: string = 'inactive';
  constructor() { }

  ngOnInit(): void {
    const windowSize = window.innerWidth;



  }

  onAppear() {
    this.state = 'active';
  }
}
