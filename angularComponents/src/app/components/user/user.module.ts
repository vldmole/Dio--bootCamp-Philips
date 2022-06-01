import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryUserService } from './service/inMemory-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from './service/user-service'
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserDynamicListModule } from './user-dynamic-list/userDynamicList.module';
import { UserMainPageComponent } from './main-page/user-main-page.component';

const routes: Routes = [

  {
    path: 'userForm',
    component: UserFormComponent,
  },
]


@NgModule({
  declarations: [
    UserMainPageComponent,
    UserFormComponent,
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    UserDynamicListModule,
  ],
  exports: [
    UserMainPageComponent
  ],
  providers: [
    { provide: UserService, useExisting: InMemoryUserService },
  ],
})
export class UserModule { }
