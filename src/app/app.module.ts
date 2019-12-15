import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.routes';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainContentComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
