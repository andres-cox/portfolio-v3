import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISoftProject } from '../models/soft-project.interface';
import { IElecProject } from '../models/elec-project.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSoftProjects(): Observable<ISoftProject[]> {
    return this.http.get<ISoftProject[]>('assets/data/soft-projects.json');
  }

  getSoftProjectDetails(title: string) {
    const projects = this.http.get<ISoftProject[]>('assets/data/soft-projects.json');
    return projects.pipe(map(res => res.find(project => project.headline == title)))
  }

  getElectronicProjects(): Observable<IElecProject[]> {
    return this.http.get<IElecProject[]>('assets/data/elec-projects.json');
  }

  getElectronicProjectDetails(title: string) {
    const projects = this.http.get<IElecProject[]>('assets/data/elec-projects.json');
    return projects.pipe(map(res => res.find(project => project.headline == title).details))
  }
}
