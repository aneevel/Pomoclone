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
  interval: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  startCountdown(): void {
    this.countingDown = true;
    this.counterHasTime = true;
    this.interval = setInterval((this.updateTimer), 1000, this.timerValue);
  }

  resumeCountdown(): void {
    this.countingDown = true;
    this.interval = setInterval((this.updateTimer), 1000);
  }

  pauseCountdown(): void {
    this.countingDown = false;
    clearInterval(this.interval);
  }

  stopCountdown(): void {
    this.countingDown = false;
    this.counterHasTime = false;
    this.timerValue = this.defaultTimerValue;
    clearInterval(this.interval);
  }

  updateTimer(timerValue: string): void {

    let seconds = timerValue.slice(3);
    console.log(`Seconds value ${seconds}`);

    let minutes = timerValue.slice(0, 2);
    console.log(`Minutes value ${minutes}`);
  }

}
