import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AnimatedBgComponent } from './home/animated-bg/animated-bg.component';
import { Error404Component } from './errors/error404/error404.component';
import { ContentWindowComponent } from './home/content-window/content-window.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { JQUERY_TOKEN } from './shared/j-query.service';
import { ColListComponent } from './home/col-list/col-list.component';
import { FooterComponent } from './footer/footer.component';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AnimatedBgComponent,
    Error404Component,
    ContentWindowComponent,
    MenuComponent,
    ColListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
