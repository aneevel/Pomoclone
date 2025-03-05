import { Component, OnInit } from '@angular/core';

import { TASKS } from '../task/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true
})
export class TasksComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
