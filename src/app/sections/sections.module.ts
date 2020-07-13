import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './intro/header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './projects/project/project.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ContactComponent,
    IntroComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent
  ],
  exports: [
    IntroComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class SectionsModule { }
