import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SocialComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
