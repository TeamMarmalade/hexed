import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() timeRemaining: number = 60;
  constructor() { }

  ngOnInit(): void {
  }

  interval = setInterval(() => {
    if(this.timeRemaining > 0) this.timeRemaining--;
  }, 1000)

}
