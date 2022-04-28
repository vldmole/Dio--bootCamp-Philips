import { Observable } from "rxjs";
import { EntityService } from "src/app/shared/services/entity/entity.service";
import { Course } from "../models/course-model";


export abstract class CourseService extends EntityService<number, Course>
{
   // nothing for while
}