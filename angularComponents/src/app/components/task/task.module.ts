import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 

import { TaskListComponent } from "./taskList/task-list.component";
import { TaskListItemComponent } from './taskList/task-list-item/task-list-item.component';
import { TaskFormComponent } from "./task-form/task-form.component";


const routes: Routes = [
   
]

@NgModule({
   
   imports: [
      RouterModule.forChild(routes),
      BrowserModule,
      CommonModule,
      FormsModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      MatCheckboxModule 
   ],
   
   declarations: [
      TaskFormComponent,
      TaskListComponent,
      TaskListItemComponent
   ],

   exports: [
      TaskFormComponent,
      TaskListComponent
   ],
   
   providers: [],
})
export class TaskModule { }