import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    ContactComponent,
    IntroComponent,
    ProjectsComponent
  ],
  exports: [
    IntroComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
