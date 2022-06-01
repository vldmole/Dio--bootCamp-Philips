import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user-service';
import { UserDynamicListComponent } from '../user-dynamic-list/userDynamicList.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit 
{
  @ViewChild('userForm') userForm: UserFormComponent | undefined;
  @ViewChild('userList') userList: UserListComponent | undefined;
  @ViewChild('dynamicUserList') dynamicUserList: UserDynamicListComponent | undefined;

  private service: UserService;
  users: User[] = [];

  //------------------------------------------
  constructor(service: UserService)
  {
    this.service = service;
  }

  //------------------------------------------
  ngOnInit(): void 
  {
    this.retrieveAllUsers();
  }

  //------------------------------------------
  private retrieveAllUsers(): void
  {
    const observable = this.service.retrieveAll();
    observable.subscribe({
      next: (users: User[]) =>
      {
        this.users = users;
        this.userList?.setUsers(users);
        this.dynamicUserList?.setData(users);
      },
      error: err => console.log(err)
    });
  }

  //------------------------------------------
  public deleteById(id: number): void
  {
    console.log("Deleting ", id);
    const observable = this.service.deleteById(id);
    observable.subscribe({
      next: (deletedUser) =>
      {
        console.log('deleted', deletedUser);
        this.users = this.users.filter(user => user.id != id);
        this.userList?.setUsers(this.users);
        this.dynamicUserList?.setData(this.users);

        if (id === this.userForm?.getCurrentUser().id)
          this.userForm.reset();
      },
      error: err => console.log(err)
    })
  }

  //------------------------------------------
  onEdit(user: User)
  {
    console.log("main ", 71, user);
    if (this.userForm)
      this.userForm.setCurrentUser(user);
  }

  //------------------------------------------
  onDelete(user: User)
  {
    console.log("On delete main 74", user);
    return this.deleteById(user.id);
  }

  //------------------------------------------
  onSave(user: User)
  {
    console.log("82 saving", this.userForm, user);
    const observable = this.service.save(user);
    observable.subscribe({
      next: (user) =>
      {
        const index = this.users.findIndex(element => (user.id === element.id));
        this.users[index] = user;
        this.userList?.setUsers(this.users);
        this.dynamicUserList?.setData(this.users);
      },
      error: err => console.error("90 error while saving", err)
    })
  }
}
