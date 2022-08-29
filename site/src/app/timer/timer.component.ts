import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  //@ViewChild('pausebutton') pause:ElementRef;
  //@ViewChild('startbutton') div:ElementRef;
  //@ViewChild('fastforwardbutton') div:ElementRef;

  countingDown: boolean = false;
  timerValue: string = "25:00";

  constructor() {}

  ngOnInit(): void {}

  startCountdown(): void {
    this.countingDown = true;
    this.disableStartButton();
    this.enablePauseButton();
    this.enableFastForwardButton();
  }

  updateTimer(): void {
    console.log(`Updating timer ${this.timerValue}`);
  }

  enableStartButton(): void {

  }

  disableStartButton(): void {

  }

  enablePauseButton(): void {

  }

  disablePauseButton(): void {

  }

  enableFastForwardButton(): void {

  }

  disableFastForwardButton(): void {

  }


}
