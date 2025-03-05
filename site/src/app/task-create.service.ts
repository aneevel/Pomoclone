import { Injectable } from '@angular/core';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {

  tasks: Task[] = [];

  constructor() { }

  addTask(description: string, pomodoros: number): void {
    this.tasks = [...this.tasks,
    {
      description: description,
      pomodorosToComplete: pomodoros,
      pomodorosCompleted: 0
    }];

    console.log(this.tasks);
  }
}
