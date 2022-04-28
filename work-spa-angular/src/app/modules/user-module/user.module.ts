import { CommonModule } from "@angular/common";
import { forwardRef, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserFormComponent } from "./components/user/user-form.component";
import { InMemoryUserService } from "./services/inMemory/user.service";
import { UserService } from "./services/user.service";

const routes = [
   {
      path: 'user', component: UserFormComponent
   },
   {
      path: 'user/:id', component: UserFormComponent
   },
   {
      path: 'users', component: UserListComponent
   },
]

@NgModule({
   declarations: [
      UserListComponent,
      UserFormComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes)
   ],

   providers: [
      { provide: UserService, useExisting: InMemoryUserService }
   ],
})
export class UserModule
{

}