import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { CardComponent } from './electronic/card/card.component';
import { ScrollAppearDirective } from '../directives/scroll-appear.directive';
import { AnimationDirective } from '../directives/animation.directive';



@NgModule({
  declarations: [
    ContactComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent,
    ElectronicComponent,
    CardComponent,
    ScrollAppearDirective,
    AnimationDirective
  ],
  exports: [
    IntroComponent,
    ProjectsComponent,
    ContactComponent,
    ElectronicComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ]
})
export class SectionsModule { }
