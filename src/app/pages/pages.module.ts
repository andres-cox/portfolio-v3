import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SectionsModule } from '../sections/sections.module';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SectionsModule,
    SwiperModule,
    ComponentsModule
  ]
})
export class PagesModule { }
