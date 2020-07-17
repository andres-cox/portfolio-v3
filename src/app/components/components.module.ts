import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { HeaderComponent } from './header/header.component';
import { NavScrollDirective } from '../directives/nav-scroll.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SocialComponent,
    HeaderComponent,
    NavScrollDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    SocialComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
