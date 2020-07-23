import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ISoftProject } from 'src/app/models/soft-project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  softProjects: Observable<ISoftProject[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.softProjects = this.dataService.getSoftProjects();
  }

}
