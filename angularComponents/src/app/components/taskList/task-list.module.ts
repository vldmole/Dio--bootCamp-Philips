import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list'; 

import { TaskListComponent } from "./task-list.component";

const routes: Routes = [
   
]

@NgModule({
   
   imports: [
      RouterModule.forChild(routes),
      MatInputModule,
      MatCardModule,
      MatGridListModule
   ],
   
   declarations: [
      TaskListComponent
   ],

   exports: [
      TaskListComponent
   ],
   
   providers: [],
})
export class TaskListModule { }