import { Component, OnInit } from '@angular/core';
import { ITask } from './model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Array<ITask> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask(title: string)
  {
    const task = {
      id: NaN,
      title: title,
      done: false,
    };
    this.taskList.push(task);
    
    console.log(this.taskList);
  }

}
