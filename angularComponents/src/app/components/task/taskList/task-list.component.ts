import { Component, Input, OnInit} from '@angular/core';

import { ITask } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit
{

  @Input() taskList: Array<ITask> = [];
  @Input() onDeleteHandler: any;
  
  constructor() { }
  
  ngOnInit(): void
  {
    this.onDeleteHandler({ id: 0, title: '', done: false });
  }

  delete(task: ITask)
  {
    console.log('taskList', task);
  }
}
