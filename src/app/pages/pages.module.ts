import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SectionsModule } from '../sections/sections.module';



@NgModule({
  declarations: [
    ProjectDetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SectionsModule
  ]
})
export class PagesModule { }
