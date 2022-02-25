import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hexed';
  name: string = "Guest"
  color: [number, number, number] = [0,0,0];
  score: number = 0;
  timer: number = 0;
  random_color: [number, number, number] = [0, 0, 0];
  game_start: boolean = false;
  win: boolean = false;
  compare: boolean = false;
  time: number = 20;
  original_time: number = this.time;

  changeValue(c: number, value: number) {
    this.color[c] = value;
  }
  
  getRandomColor(value: [number, number, number]) {
    this.time = this.original_time;
    this.random_color = value;
    this.game_start = true;

    console.log(this.color);
    console.log(this.random_color);
  }

  changeTime(value: number) {
    this.time = value;
  }

  compare_vals(): void {
    if(this.color[0] === this.random_color[0] && this.color[1] === this.random_color[1] && this.color[2] === this.random_color[2]) {
      this.win = true;
      this.game_start = false;
      // this.time will give current time
      alert(`Correct: Completed in ${this.original_time - this.time} seconds`);
    }
    else {
      alert("Not Correct");
    }
  }

  failure(value: boolean): void {
    if(!value) alert("Failed to guess color in time");
  }

  endGame(value: boolean): void {
    this.game_start = value;
  }
}
