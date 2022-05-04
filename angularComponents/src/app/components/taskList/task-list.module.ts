import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./task-list.component";


const routes: Routes = [
   
]

@NgModule({
   
   imports: [
      RouterModule.forChild(routes),
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