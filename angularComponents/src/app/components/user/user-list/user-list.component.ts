import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit
{
  @Input() users: User[] = [];
  @Output() onEdit = new EventEmitter<User>();
  @Output() onDelete = new EventEmitter<User>();

  private _filteredUsers: User[] = [];
  private _filterBy: string = '';

  //----------------------------------
  constructor()
  {
    
  }

  //----------------------------------
  ngOnInit(): void 
  {
    this._filteredUsers = this.users;
  }

  //----------------------------------
  public get filteredUsers(): User[]
  {
    return this._filteredUsers;
  }

  //----------------------------------
  public get filter(): string
  {
    return this._filterBy
  }

  //----------------------------------
  public set filter(value: string)
  {
    this._filterBy = value.toLocaleLowerCase();

    this._filteredUsers = this.users.filter(
      (user: User) => user.firstName
        .toLocaleLowerCase()
        .indexOf(this._filterBy) > -1
    );
  }

  //-----------------------------
  setUsers(users: User[])
  {
    this.users = users;
    this._filteredUsers = users;
  }
  //-----------------------------
  edit(user: User)
  {
    this.onEdit.emit(user);
  }

  //-----------------------------
  delete(user: User)
  {
    this.onDelete.emit(user);
  }
}