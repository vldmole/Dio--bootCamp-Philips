import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskListComponent } from "../taskList/task-list.component";
import { TaskListModule } from "../taskList/task-list.module";
import { HeaderComponent } from "./header.component";

const routes: Routes = [
   {
      path: 'taskList',
      component: TaskListComponent,
   }
]

@NgModule({

   imports: [
      RouterModule.forChild(routes),
      TaskListModule,
   ],

   declarations: [
      HeaderComponent
   ],

   exports: [
      HeaderComponent
   ],

   providers: [],
})
export class HeaderModule { }