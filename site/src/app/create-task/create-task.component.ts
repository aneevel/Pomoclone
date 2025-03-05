import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-task',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone: true
})
export class CreateTaskComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    console.log("opening add task modal");
  }

}
