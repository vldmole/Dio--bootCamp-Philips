import { Injectable } from "@angular/core";
import { User } from "../../models/user-model";
import { InMemoryService, IIdGenerator } from "../../../../shared/services/entity/inMemory/inMemory.service";
import { UserService } from "../user.service";

//---------------------------------------------------------------------------------
@Injectable({
   providedIn: 'root',
})
export class InMemoryUserService
   extends InMemoryService<number, User>
{
   constructor()
   {
      super(USERS_ARRAY, new IdGenerator());
   }
}

//---------------------------------------------------------------------------------
class IdGenerator implements IIdGenerator<number>
{
   id: number = USERS_ARRAY.length;

   newId(): number
   {
      return this.id++;
   }
}

//---------------------------------------------------------------------------------
const USERS_ARRAY: User[] = [
   {
      id: 1,
      name: 'Paulo',
      email: 'paulo@gmail.com',
      site: 'www.philips.com/~paulo',
      admission: new Date(2020, 1, 2),
      imageUrl: '/assets/images/users/paulo.jpg',
   },
   {
      id: 2,
      name: 'Pedro',
      email: 'pedro@gmail.com',
      site: 'www.philips.com/~pedro',
      admission: new Date(2010, 10, 27),
      imageUrl: '/assets/images/users/pedro.jpg',
   },
   {
      id: 3,
      name: 'Maria',
      email: 'maria@gmail.com',
      site: 'www.philips.com/~maria',
      admission: new Date(2021, 5, 12),
      imageUrl: '/assets/images/users/maria.jpg',
   },
   {
      id: 4,
      name: 'Silvia',
      email: 'silvia@gmail.com',
      site: 'www.philips.com/~silvia',
      admission: new Date(2019, 3, 12),
      imageUrl: '/assets/images/users/silvia.jpg',
   },
   {
      id: 5,
      name: 'Patricia',
      email: 'patricia@gmail.com',
      site: 'www.philips.com/~patricia',
      admission: new Date(2016, 6, 22),
      imageUrl: '/assets/images/users/patricia.jpg',
   },
   {
      id: 6,
      name: 'Jorge',
      email: 'jorge@gmail.com',
      site: 'www.philips.com/~jorge',
      admission: new Date(2017, 9, 15),
      imageUrl: '/assets/images/users/jorge.jpg',
   },
];