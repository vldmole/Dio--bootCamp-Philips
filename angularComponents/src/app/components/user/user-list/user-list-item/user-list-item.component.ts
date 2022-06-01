import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/user.model';

import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./User-list-item.component.css']
})
export class UserListItemComponent implements OnInit 
{

  @Input() user: User | undefined;
  
  @Output() onDelete = new EventEmitter<User>();
  @Output() onEdit = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void
  {
    
  }


  public delete()
  {
    this.onDelete.emit(this.user);
  }

  public edit()
  {
    this.onEdit.emit(this.user);
  }
}
