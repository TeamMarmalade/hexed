import { Component } from '@angular/core';
import { HttpService } from './http.service';

interface Score {
  name: string;
  score: number;
}

abstract class GuessAbstract {
  current_color: [number, number, number] = [0, 0, 0]
}

class Guess extends GuessAbstract {
  getColor(): [number, number, number] {
    return this.current_color;
  }

  getTColor(t: number): number {
    return this.current_color[t];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hexed';
  color: Guess = new Guess();
  score: number = 0;
  formShow: boolean = false;
  name: string = '';
  // timer: number = 0;
  random_color: [any, any, any] = [0, 0, 0];
  game_start: boolean = false;
  win: boolean = false;
  compare: boolean = false;
  time: number = 60;
  original_time: number = this.time;
  scores: Score[] = [];

  constructor(private http: HttpService) {};

  ngOnInit() {
    this.color.current_color = [0, 0, 0];
    this.http.sendGetRequest("getscores").subscribe((data: any) => {
      for (let name in data["scores"]) {
        // console.log(name);
        // console.log(data["scores"][name])
        let current_score: Score = {name: name, score: data["scores"][name]};
        this.scores.push(current_score);
      }
      this.scores.sort((a: Score, b: Score) => {
        return b.score - a.score;
      });
      console.log(this.scores);
    });
  }

  changeValue(c: number, value: number) {
    this.color.current_color[c] = value;
  }

  saveInit(Init: [string, number]) {
    this.original_time = Init[1];
    this.name = Init[0];
    this.formShow = true;
  }

  getRandomColor<T>(value: [T, T, T]) {
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
    if(this.color.current_color[0] === this.random_color[0] && this.color.current_color[1] === this.random_color[1] && this.color.current_color[2] === this.random_color[2]) {
      this.win = true;
      this.game_start = false;
      this.score = ((255 - Math.abs(this.random_color[0] - this.color.current_color[0])) + (255 - Math.abs(this.random_color[1] - this.color.current_color[1])) + (255 - Math.abs(this.random_color[2] - this.color.current_color[2]))) * Math.floor(this.time) * (1000 * (101 - this.original_time));

      // this.time will give current time
      // alert(`Correct: Completed in ${this.original_time - this.time} seconds`);
      alert(`You won! Your score: ${this.score}`);

      if(this.scores[this.scores.length - 1].score < this.score) {
        this.http.sendPostRequest('sendscore', {
          name: this.name,
          score: this.score
        }).subscribe((data) => {
          console.log(data);
        });
      }
    }
    else {
      this.win = false;
      this.game_start = false;
      this.score = ((255 - Math.abs(this.random_color[0] - this.color.current_color[0])) + (255 - Math.abs(this.random_color[1] - this.color.current_color[1])) + (255 - Math.abs(this.random_color[2] - this.color.current_color[2]))) * Math.floor(this.time) * (1000 * (101 - this.original_time));

      // this.time will give current time
      // alert(`Correct: Completed in ${this.original_time - this.time} seconds`);
      alert(`You lose. Your score: ${this.score}`);
    }
  }
  /*
  ((255 - abs(actual_red - guessed_red))
  + (255 - abs(actual_green - guessed_green))
  + (255 - abs(actual_blue - gussed_blue))) * floor(seconds_remaining)
  * (1000 * (101 - seconds_selected))
  */

  failure(value: boolean): void {
    console.log(this.random_color);
    console.log(this.color);

    this.score = ((255 - Math.abs(this.random_color[0] - this.color.current_color[0])) + (255 - Math.abs(this.random_color[1] - this.color.current_color[1])) + (255 - Math.abs(this.random_color[2] - this.color.current_color[2]))) * Math.floor(this.time) * (1000 * (101 - this.original_time));
    console.log(this.score);
    alert(`You lost. Your score: ${this.score}`);
    this.formShow = false;
  }

  endGame(value: boolean): void {
    this.game_start = value;
  }
}
