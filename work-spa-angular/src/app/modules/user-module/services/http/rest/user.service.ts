import { Injectable } from "@angular/core";
import { User } from "../../../models/user-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";


@Injectable({
   providedIn: 'root',
})
export class UserService
{
   readonly _url = 'http://localhost:3100/api/users';

   constructor(private _httpClient: HttpClient)
   {
      //nothing - the dependency already injected
   }

   public retrieveAll(): Observable<User[]>
   {
      return this._httpClient.get<User[]>(this._url);
      //return UserS_ARRAY
   }

   public findById(id: number): Observable<User>
   {
      return this._httpClient.get<User>(`${this._url}/${id}`);
     
      /* const filtered = UserS_ARRAY.filter((User: User) => User.id === id);
      if (filtered.length > 0)
         return filtered[0];
      
      throw 'User not found.';*/
   }

   public save(User: User): Observable<User>
   {
      if (User.id)
         return this._httpClient.put<User>(`${ this._url }/${ User.id }`, User);
      else
         return this._httpClient.post<User>(this._url, User);
      /*
      console.log("User service saving");
      const id = User.id;
      const index = UserS_ARRAY.findIndex(User => User.id === id);
      UserS_ARRAY[index] = User;
      */
   }

   public deleteById(id: number): Observable<User>
   {
      return this._httpClient.delete<User>(`${ this._url }/${ id }`);
   }
}

