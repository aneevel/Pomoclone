import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {

  protected tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  addTask(description: string, pomodoros: number): void {
    this.tasksSubject.next([...this.tasksSubject.value,
    {
      description: description,
      pomodorosToComplete: pomodoros,
      pomodorosCompleted: 0
    }]);
  }
}
