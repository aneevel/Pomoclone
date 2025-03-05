import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskCreateService } from '../task-create.service';
import { faPlus, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-task',
  imports: [
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone: true
})
export class CreateTaskComponent implements OnInit, AfterViewInit {
  @ViewChild('createTaskModal') createTaskModal!: ElementRef;
  @ViewChild('createTaskButton') createTaskButton!: ElementRef;

  pomodoros: number = 1;
  pomodoroDescription: string = "";

  faPlus = faPlus;
  faUpLong = faUpLong;
  faDownLong = faDownLong;

  constructor(private renderer: Renderer2,
    private taskCreateService: TaskCreateService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  incrementPomodoros(): void {
    this.pomodoros++;
  }

  decrementPomodoros(): void {
    if (this.pomodoros > 1)
      this.pomodoros--;
  }

  toggleCreateModal(): void {

    if (this.createTaskButton.nativeElement.style.display === 'block')
      this.renderer.setStyle(this.createTaskButton.nativeElement, 'display', 'none');
    else
      this.renderer.setStyle(this.createTaskButton.nativeElement, 'display', 'block');

    if (this.createTaskModal.nativeElement.style.display === 'block')
      this.renderer.setStyle(this.createTaskModal.nativeElement, 'display', 'none');
    else
      this.renderer.setStyle(this.createTaskModal.nativeElement, 'display', 'block');
  }

  saveTask(): void {
    if (this.pomodoroDescription.trim() === "")
      return;
    this.taskCreateService.addTask(
      this.pomodoroDescription,
      this.pomodoros
    );
  }

}
