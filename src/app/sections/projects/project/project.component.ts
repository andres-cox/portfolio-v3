import { Component, OnInit, Input } from '@angular/core';
import { animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animations]
})
export class ProjectComponent implements OnInit {
  @Input() index: number;
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
  }

  onAppear() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    console.log('project', this.state);
  }
}
