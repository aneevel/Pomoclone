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
  defaultTimerValue: string = "25:00";

  constructor() {}

  ngOnInit(): void {}

  startCountdown(): void {
    this.countingDown = true;
    this.counterHasTime = true;
  }

  resumeCountdown(): void {
    this.countingDown = true;
  }

  pauseCountdown(): void {
    this.countingDown = false;
  }

  stopCountdown(): void {
    this.countingDown = false;
    this.counterHasTime = false;
    this.timerValue = this.defaultTimerValue;
  }

  updateTimer(): void {
  }
}
