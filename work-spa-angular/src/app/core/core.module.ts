import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseModule } from "../modules/course-module/course.module";
import { UserModule } from "../modules/user-module/user.module";
import { Error404Component } from "./components/error-404/error-404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";


@NgModule({
   declarations: [
      NavBarComponent,
      Error404Component
   ],
   imports: [
      CourseModule,
      UserModule,
      RouterModule.forChild([
         {
            path: '**', component: Error404Component
         }
      ])
   ],
   exports: [
      NavBarComponent
   ]
})
export class CoreModule
{
   //nothing for now
}