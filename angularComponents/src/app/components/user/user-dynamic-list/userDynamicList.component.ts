import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from '../model/user.model';
import { UserDataSource } from './user.dataSource';

@Component({
  selector: 'app-user-dynamic-list',
  templateUrl: './userDynamicList.component.html',
  styleUrls: ['./userDynamicList.component.css']
})
export class UserDynamicListComponent implements OnInit 
{
  @Output() onEdit : EventEmitter<User> = new EventEmitter<User>();
  @Output() onDelete: EventEmitter<User> = new EventEmitter<User>();

  dataSource = new UserDataSource([]);
  displayedColumns: string[] = ['id', 'firstName', 'birthDate', 'actions'];

  constructor()
  {
    //none for while
  }

  ngOnInit(): void 
  {
    
  }

  public setData(users: User[])
  {
    console.log("31 set Data");
    this.dataSource.setData(users);
  }

  public edit(user: User)
  {
    console.log("onEdit 37 dynamic", user);
    this.onEdit.emit(user);
  }

  public delete(user: User)
  {
    console.log("onDelete", user);
    this.onDelete.emit(user);
  }
}
