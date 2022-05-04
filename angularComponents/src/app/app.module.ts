import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './rootComponent/app.component';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModule } from './components/task/task.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    TaskModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
