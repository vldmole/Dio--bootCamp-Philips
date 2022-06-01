import { Injectable } from "@angular/core";
import { IIdGenerator, InMemoryService } from "src/app/services/entity/inMemory/inMemory.service";
import { User } from "../model/user.model";

//-----------------------------------------------------------------------
class UserIdGenerator implements IIdGenerator<number>
{
   private id: number = 0;
   
   newId(): number
   {
      return this.id++;
   }
   
}

//-----------------------------------------------------------------------
@Injectable({
   providedIn: 'root',
})
export class InMemoryUserService extends InMemoryService<number, User>
{
   constructor()
   {
      super(new UserIdGenerator(), USER_ARRAY);
   }
}

//-----------------------------------------------------------------------
const USER_ARRAY = [
   {
      id:1,
      firstName: 'Vilson',
      midleName: 'Luiz',
      lastName: 'Dalle Mole',
      birthDate: new Date("01/04/1971"),
      job: 'professor'
   },
   {
      id: 2,
      firstName: 'Pedro',
      midleName: 'da Silva',
      lastName: 'Guimarães',
      birthDate: new Date("11/09/1985"),
      job: 'padeiro'
   },
   {
      id: 3,
      firstName: 'Maria',
      midleName: '',
      lastName: 'Souza',
      birthDate: new Date("03/24/1998"),
      job: 'garçonete'
   },
]