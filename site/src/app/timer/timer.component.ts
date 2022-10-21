import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  countingDown: boolean = false;
  counterHasTime: boolean = false;
  counterCompleted: boolean = false;
  timerValue: string = "25:00";
  defaultWorkTimerValue: string = "25:00";
  defaultShortBreakTimerValue: string = "05:00";
  currentState: string;
  interval: any;
  alarm: Howl;

  constructor() {
    this.alarm = new Howl({
      src: ["../../assets/audio/alarm.wav"],
   });
   this.currentState = "focus";
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
    this.resetTimer();
    clearInterval(this.interval);
  }

  fastForward(): void {
    this.countingDown = false;
    this.counterHasTime = false;
    this.timerValue = `00:00`;
    this.displayDone();
    clearInterval(this.interval);
  }

  clearCountdown(): void {

    this.resetTimer();
    this.counterCompleted = false;
    this.alarm.stop();
  }

  resetTimer(): void {
    this.currentState === 'focus'
    ? this.timerValue = this.defaultWorkTimerValue
    : this.timerValue = this.defaultShortBreakTimerValue;
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

    let minutesDisplay = this.padValue(minutes);
    let secondsDisplay = this.padValue(seconds);
    this.timerValue = `${minutesDisplay}:${secondsDisplay}`;
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

  padValue(value: number): string {
    if (value < 10)
      return `0${value.toString()}`;
    return value.toString();
  }

  timerIsDone(): boolean {
    return (this.timerValue === `00:00`);
  }

  displayDone(): void {
    this.counterCompleted = true;
    this.alarm.play();
    this.switchState();
  }

  switchState(): void {
    this.currentState === 'focus'
      ? this.currentState = 'shortBreak'
      : this.currentState = 'focus';
  }
}
