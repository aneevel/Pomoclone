import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-task',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone: true
})
export class CreateTaskComponent implements OnInit, AfterViewInit {
  @ViewChild('createTaskModal') createTaskModal!: ElementRef;
  @ViewChild('createTaskButton') createTaskButton!: ElementRef;

  faPlus = faPlus;
  faUpLong = faUpLong;
  faDownLong = faDownLong;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  toggleCreateModal(): void {
    console.log("opening add task modal");
  }

}
