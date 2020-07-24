import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISoftProject } from '../models/soft-project.interface';
import { Observable } from 'rxjs';

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
    projects.subscribe(res => {
      const test = res.find(project => project.headline == title)
      console.log(test);
    })

  }
}
