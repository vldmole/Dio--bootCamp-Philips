import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/courses/course-list.component';
import { StarComponent } from './components/star/star.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error-404/error-404.component';
import { CourseFormComponent } from './components/course/course-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent, 
    Error404Component,
    CourseFormComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'course/:id', component: CourseFormComponent
      },
      {
        path: 'courses', component: CourseListComponent
      },
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
