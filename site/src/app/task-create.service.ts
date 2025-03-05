import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {

  tasks: Task[] = [];

  constructor() { }

  addTask(description: string, pomodoros: number): void {
    console.log(`Adding task with description ${description} and pomodoros ${pomodoros}`);
  }
}
