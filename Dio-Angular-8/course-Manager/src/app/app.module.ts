import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error-404/error-404.component';
import { CourseModule } from './modules/course-module/course.module';

@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent, 
    Error404Component,
    
  ],
  
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '**', component: Error404Component
      }

    ]),
  ],
  
  providers: [

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
