import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    CreateTaskComponent,
    NgFor
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
