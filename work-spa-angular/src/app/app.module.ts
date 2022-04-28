import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CoreModule} from './core/core.module'
import { CourseModule } from './modules/course-module/course.module';
import { UserModule } from './modules/user-module/user.module';

@NgModule({

  declarations: [
    AppComponent,    
  ],
  
  imports: [
    BrowserModule,
    CoreModule,
    CourseModule,
    UserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      }
    ]),
  ],
  
  providers: [
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
