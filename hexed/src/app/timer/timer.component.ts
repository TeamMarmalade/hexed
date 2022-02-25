import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() timeRemaining: number = 10;
  @Output() TimeEmitter = new EventEmitter<number>();
  @Output() EndEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  endGame(): void {
    this.EndEmitter.emit(false);
  }

  interval = setInterval(() => {
    if(this.timeRemaining > 0) this.TimeEmitter.emit(this.timeRemaining - 1);
    else this.endGame();
  }, 1000);

}
