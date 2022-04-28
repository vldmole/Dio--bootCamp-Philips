import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InMemoryUserService } from "../../services/inMemory/user.service";
import { User } from "../../models/user-model";

@Component({
   selector: 'user-form',
   templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit 
{
   user!: User;

   public constructor(private _activateRoute: ActivatedRoute,
                      private _userService: InMemoryUserService )
   {
      //nothing - the attributte was created and injected using a sintax sugar
   }

   public ngOnInit(): void
   {
      const stringId = this._activateRoute.snapshot.paramMap.get('id');
      const id = stringId ? parseInt(stringId) : NaN;

      if (id)
         return this.get(id);
      
      this.user = new User();   
   }

   public get(id: number)
   {
      const observable = this._userService.findById(id);
      observable.subscribe({

         next: (user: User) => { this.user = user },

         error: err => console.log(err)
      })
   }

   public save(): void
   {
      const observable = this._userService.save(this.user);
      observable.subscribe({
         next: user => this.user = user,
         error: err => console.log(err)
      })
   }

   public delete(): void
   {
      const observable = this._userService.deleteById(this.user.id)
      observable.subscribe({
         next: user => this.user = user ? user : new User(),
         error: err => console.log(err)
      })
   }
}