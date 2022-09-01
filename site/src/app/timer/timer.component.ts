import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

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
    console.log("Enabling start button");
  }

  disableStartButton(): void {
    console.log("Disabling start button");
  }

  enablePauseButton(): void {
    console.log("Enabling pause button");
  }

  disablePauseButton(): void {
    console.log("Disabling pause button");
  }

  enableFastForwardButton(): void {
    console.log("Enabling fast forward button");
  }

  disableFastForwardButton(): void {
    console.log("Disabling fast forward button");
  }


}
