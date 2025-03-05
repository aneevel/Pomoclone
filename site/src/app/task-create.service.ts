import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {

  tasks: Task[] = [];

  constructor() { }

  addTask(): void {
    console.log("Adding task...");
  }
}
