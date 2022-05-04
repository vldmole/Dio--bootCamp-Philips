import { Component, EventEmitter, OnInit } from '@angular/core';
import { ITask } from '../model/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent
{
  public taskList: Array<ITask> = [];

  addTask(title: string)
  {
    if (!title || '' === title)
      return;
    
    const task = {
      id: NaN,
      title: title,
      done: false,
    };
  
    this.taskList.push(task);
  }

  delete(task: ITask)
  {
    const index = this.taskList.findIndex(value => value.title === task.title);
    this.taskList.splice(index, 1);
    //this.service.delete(task);
  }

  save(title: string)
  {
    this.addTask(title);

    for (let task of this.taskList)
    {
      console.log('saved', task);
      //this.service.add(task);
    }
  }
}
