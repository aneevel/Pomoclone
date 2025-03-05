import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [TimerComponent, TasksComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'site';
}
