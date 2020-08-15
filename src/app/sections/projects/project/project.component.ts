import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { animations } from 'src/app/shared/animations';
import { ISoftProject } from 'src/app/models/soft-project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animations]
})
export class ProjectComponent implements OnInit {
  @Input() index: number;
  @Input() project: ISoftProject;
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
    const windowSize = window.innerWidth;

    this.state = (windowSize < 768) ? 'active' : 'inactive';
  }

  onAppear() {
    this.state = 'active';
  }
}
