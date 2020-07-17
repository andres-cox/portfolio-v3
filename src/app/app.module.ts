import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { SectionsModule } from './sections/sections.module';
import { NavScrollDirective } from './directives/nav-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
