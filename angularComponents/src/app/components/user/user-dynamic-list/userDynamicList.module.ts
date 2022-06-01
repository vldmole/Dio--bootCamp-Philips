import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { StylizedButtonsModule } from "../../buttons/stylized-buttons.module";

import { InMemoryUserService } from "../service/inMemory-user.service";
import { UserService } from "../service/user-service";

import { UserDynamicListComponent } from "./userDynamicList.component";

@NgModule({
   declarations: [
      UserDynamicListComponent,
   ],

   imports: [
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      StylizedButtonsModule,
   ],

   exports: [
      UserDynamicListComponent,
   ],

   providers: [
      { provide: UserService, useExisting: InMemoryUserService }
   ],
})
export class UserDynamicListModule { };