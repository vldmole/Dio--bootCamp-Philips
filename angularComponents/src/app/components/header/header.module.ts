import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskFormComponent } from "../task/task-form/task-form.component";

import { TaskModule } from "../task/task.module";
import { HeaderComponent } from "./header.component";

const routes: Routes = [
   {
      path: 'taskList',
      component: TaskFormComponent,
   }
]

@NgModule({

   imports: [
      RouterModule.forChild(routes),
      TaskModule,
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