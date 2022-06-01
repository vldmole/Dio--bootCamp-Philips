import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskFormComponent } from "../task/task-form/task-form.component";

import { TaskModule } from "../task/task.module";
import { UserMainPageComponent } from "../user/main-page/user-main-page.component";
import { HeaderComponent } from "./header.component";

const routes: Routes = [
   
   {
      path: 'userMainPage',
      component: UserMainPageComponent,
   },
   {
      path: 'taskList',
      component: TaskFormComponent,
   },
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