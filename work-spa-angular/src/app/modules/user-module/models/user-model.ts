import { IEntity } from "src/app/shared/services/entity/entity.service";


export class User implements IEntity<number>
{
   id: number = NaN;
   name: string = '';
   email: string = '';
   imageUrl: string = '';
   site: string = '';
   admission: Date = new Date();
}