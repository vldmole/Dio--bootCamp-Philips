import { Injectable } from "@angular/core";
import { Course } from "../../../models/course-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";


@Injectable({
   providedIn: 'root',
})
export class CourseService
{
   readonly _url = 'http://localhost:3100/api/courses';

   constructor(private _httpClient: HttpClient)
   {
      //nothing - the dependency already injected
   }

   public retrieveAll(): Observable<Course[]>
   {
      return this._httpClient.get<Course[]>(this._url);
      //return COURSES_ARRAY
   }

   public findById(id: number): Observable<Course>
   {
      return this._httpClient.get<Course>(`${this._url}/${id}`);
     
      /* const filtered = COURSES_ARRAY.filter((course: Course) => course.id === id);
      if (filtered.length > 0)
         return filtered[0];
      
      throw 'Course not found.';*/
   }

   public save(course: Course): Observable<Course>
   {
      if (course.id)
         return this._httpClient.put<Course>(`${ this._url }/${ course.id }`, course);
      else
         return this._httpClient.post<Course>(this._url, course);
      /*
      console.log("course service saving");
      const id = course.id;
      const index = COURSES_ARRAY.findIndex(course => course.id === id);
      COURSES_ARRAY[index] = course;
      */
   }

   public deleteById(id: number): Observable<Course>
   {
      return this._httpClient.delete<Course>(`${ this._url }/${ id }`);
   }
}

const COURSES_ARRAY: Course[] = [
   {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'November 2, 2019',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
   },
   {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'November 4, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
   },
   {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'November 8, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
   },
   {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'November 16, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
   },
   {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'November 25, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
   }
];