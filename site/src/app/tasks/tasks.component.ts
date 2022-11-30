import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [
    { id: 1, description: 'Do WebDev exercises', pomodoros: 2 },
    { id: 2, description: 'Work on Game', pomodoros: 2},
    { id: 3, description: 'Play rhythm guitar', pomodoros: 3}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
