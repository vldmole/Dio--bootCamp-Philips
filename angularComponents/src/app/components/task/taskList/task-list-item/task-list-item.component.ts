import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../model/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  @Input() task: ITask | undefined;
  
  @Output() onDelete = new EventEmitter<ITask>()

  constructor() { }

  ngOnInit(): void
  {
    
  }

  setTaskDone(value:boolean)
  {
    if(this.task)
      this.task.done = value;
  }

  delete()
  {
    console.log("onDelete", this.task);
    this.onDelete.emit(this.task);
  }

}
