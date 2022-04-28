import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseFormComponent } from "./components/course/course-form.component";
import { StarModule } from "src/app/shared/components/star/star.module";
import { MyPipesModule } from "src/app/shared/pipes/my-pipes.module";
import { InMemoryCourseService } from "./services/inMemory/course.service";
import { CourseService } from "./services/course.service";

const routes = [
   {
      path: 'course/:id', component: CourseFormComponent
   },
   {
      path: 'courses', component: CourseListComponent
   },
]

@NgModule({
   declarations: [
      CourseListComponent,
      CourseFormComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      StarModule,
      MyPipesModule,
      RouterModule.forChild(routes)
   ],
   providers: [
      {provide: CourseService, useExisting: InMemoryCourseService},
   ]
})
export class CourseModule
{

}