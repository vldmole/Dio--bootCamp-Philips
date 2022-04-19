import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarComponent } from "../../components/star/star.component";
import { ReplacePipe } from "../../pipes/replace.pipe";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseFormComponent } from "./components/course/course-form.component";


@NgModule({
   declarations: [
      CourseListComponent,
      StarComponent,
      ReplacePipe,
      CourseFormComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forChild([
         {
            path: '', redirectTo: 'courses', pathMatch: 'full'
         },
         {
            path: 'course/:id', component: CourseFormComponent
         },
         {
            path: 'courses', component: CourseListComponent
         },
      ])
   ]
})
export class CourseModule
{

}