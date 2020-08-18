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
  @HostBinding('@.disabled') animation: boolean = false;
  @Input() index: number;
  @Input() project: ISoftProject;
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
    const windowSize = window.innerWidth;

    this.state = (windowSize < 768) ? 'active' : 'inactive';
    this.animation = (windowSize < 768) ? true : false;
  }

  onAppear() {
    this.state = 'active';
  }
}
