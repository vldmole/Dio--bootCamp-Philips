import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user-model";
import { InMemoryUserService } from "../../services/inMemory/user.service";
import { UserService } from "../../services/user.service";

@Component({
   //selector: 'app-user-list',
   templateUrl: './user-list.component.html',
   styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit
{
   private _service: UserService;
   private _users: User[] = []; 
   private _filteredUsers: User[] = []; 
   private _filterBy: string = '';

   constructor(service: UserService)
   {
      this._service = service;
   }

   ngOnInit(): void 
   {
      this.retrieveAllUsers();
   }
   
   private retrieveAllUsers(): void
   {
      const observable = this._service.retrieveAll();
      observable.subscribe({
         next: (users: User[]) =>
         {
            this._users = users;
            this._filteredUsers = this._users;
         },
         error: err => console.log(err)
      });         
   }

   public deleteById(id: number): void
   {
      const observable = this._service.deleteById(id);
      observable.subscribe({
         next: (deletedUser) =>
         {
            console.log('deleted',deletedUser);
            this._users = this._users.filter(user => user.id != id);
            this._filteredUsers = this._users;
         },
         error: err => console.log(err)
      })
   }

   public get filteredUsers(): User[]
   {
      return this._filteredUsers;
   }
 
   
   public get filter() : string {
      return this._filterBy
   }
   
   public set filter(value : string) {
      this._filterBy = value.toLocaleLowerCase();

      this._filteredUsers = this._users.filter(
         (user: User) => user.name.toLocaleLowerCase().indexOf(this._filterBy) > -1);
   }
   
}