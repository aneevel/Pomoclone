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
    this.interval = setInterval(() => this.updateTimer(this.timerValue), 1000);
  }

  resumeCountdown(): void {
    this.countingDown = true;
    this.interval = setInterval(() => this.updateTimer(this.timerValue), 1000);
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

    if (this.timerIsDone())
    {
      this.displayDone();
      return;
    }

    let seconds = parseInt(timerValue.slice(3));
    let minutes = parseInt(timerValue.slice(0, 2));

    seconds = this.updateSeconds(seconds);
    if (seconds === 59)
      minutes = this.updateMinutes(minutes);

    this.timerValue = `${minutes}:${seconds}`;
  }

  updateSeconds(seconds: number): number {

    if (seconds === 0)
      return 59;
    else
      return seconds - 1;
  }

  updateMinutes(minutes: number): number {
    return minutes - 1;
  }

  timerIsDone(): boolean {
    return (this.timerValue === `00:00`);
  }

  displayDone(): void {
    this.stopCountdown();
    console.log("We done dog");
  }
}
