import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SectionsModule } from '../sections/sections.module';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ElecProjectDetailsComponent } from './elec-project-details/elec-project-details.component';
import { SoftProjectDetailsComponent } from './soft-project-details/soft-project-details.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ElecProjectDetailsComponent,
    SoftProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    SectionsModule,
    SwiperModule,
    ComponentsModule
  ]
})
export class PagesModule { }
