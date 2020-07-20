import { Component, OnInit, Input } from '@angular/core';
import { animations } from 'src/app/shared/animations';
import { ISoftProject } from 'src/app/models/soft-project.interface';
import { SoftProject } from 'src/app/models/soft-project.model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animations]
})
export class ProjectComponent implements OnInit {
  @Input() index: number;
  state: string = 'inactive';

  project: ISoftProject = new SoftProject('Frontend Project', 'Movies PWA', "It's a website where you find movie recommentations its details and nominations", ['Ionic', 'TMDB API', 'Wikipedia API', 'JustWatch API'], 'http:dasd', 'http:web');

  constructor() { }

  ngOnInit(): void {
  }

  onAppear() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
