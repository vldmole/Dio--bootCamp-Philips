import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../models/course-model";
import { CourseService } from "../../services/course.service";

@Component({
   //selector: 'course-form',
   templateUrl: './course-form.component.html',
})
export class CourseFormComponent implements OnInit 
{
   course!: Course;

   public constructor(private _activateRoute: ActivatedRoute,
                      private _courseService: CourseService )
   {
      //nothing - the attributte was created and injected using a sintax sugar
   }

   public ngOnInit(): void
   {
      const stringId = this._activateRoute.snapshot.paramMap.get('id');
      const id = stringId ? parseInt(stringId) : NaN;
      const observable = this._courseService.findById(id);
      observable.subscribe({
         
         next: (course: Course) => { this.course = course },

         error: err => console.log(err)
      })
     /*
      this.course = this._courseService.findById(id);
      */
   }

   public save(): void
   {
      const observable = this._courseService.save(this.course);
      observable.subscribe({
         next: course => this.course = course,
         error: err => console.log(err)
      })
     /* console.log("saving");
      this._courseService.save(this.course);
      */
   }

   public delete(): void
   {
      const observable = this._courseService.deleteById(this.course.id)
      observable.subscribe({
         next: course => this.course = course ? course : new Course(),
         error: err => console.log(err)
      })
   }
}