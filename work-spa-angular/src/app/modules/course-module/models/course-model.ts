import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { IEntity } from "src/app/shared/services/entity/entity.service";

export class Course implements IEntity<number>
{
   id: number = NaN;
   name: string = '';
   description: string = '';
   imageUrl: string = '';
   price: number = NaN;
   code: string = '';
   duration: number = NaN;
   rating: number = NaN;
   releaseDate: string = '';
}