import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  countingDown: boolean = false;
  counterHasTime: boolean = false;
  timerValue: string = "25:00";

  constructor() {}

  ngOnInit(): void {}

  startCountdown(): void {
    this.countingDown = true;
    this.counterHasTime = true;
  }

  pauseCountdown(): void {
    this.countingDown = false;
  }

  updateTimer(): void {
  }
}
