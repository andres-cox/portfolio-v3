import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IElecProject } from 'src/app/models/elec-project.interface';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.scss']
})
export class ElectronicComponent implements OnInit {
  elecProjects: Observable<IElecProject[]>
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.elecProjects = this.dataService.getElectronicProjects();
  }



}
