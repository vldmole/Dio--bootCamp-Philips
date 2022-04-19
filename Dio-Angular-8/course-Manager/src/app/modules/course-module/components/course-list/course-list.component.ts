import { Component, OnInit } from "@angular/core";
import { Course } from "../../models/course-model";
import { CourseService } from "../../services/course.service";

@Component({
   //selector: 'app-course-list',
   templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit
{
   private _service: CourseService;
   private _courses: Course[] = []; 
   private _filteredCourses: Course[] = []; 
   private _filterBy: string = '';

   constructor(service: CourseService)
   {
      this._service = service;
   }

   ngOnInit(): void 
   {
      this.retrieveAllCourses();
   }
   
   private retrieveAllCourses(): void
   {
      const observable = this._service.retrieveAll();
      observable.subscribe({
         next: (courses: Course[]) =>
         {
            this._courses = courses;
            this._filteredCourses = this._courses;
         },
         error: err => console.log(err)
      });         
   }

   public deleteById(id: number): void
   {
      const observable = this._service.deleteById(id);
      observable.subscribe({
         next: (deletedCourse) =>
         {
            console.log('deleted',deletedCourse);
            this._courses = this._courses.filter(course => course.id != id);
            this._filteredCourses = this._courses;
         },
         error: err => console.log(err)
      })
   }

   public get filteredCourses(): Course[]
   {
      return this._filteredCourses;
   }
 
   
   public get filter() : string {
      return this._filterBy
   }
   
   public set filter(value : string) {
      this._filterBy = value.toLocaleLowerCase();

      this._filteredCourses = this._courses.filter(
         (course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy) > -1);
   }
   
}