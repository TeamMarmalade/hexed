import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hexed';
  color: [number, number, number] = [0,0,0];
  score: number = 0;
  timer: number = 60;

  changeValue(c: number, value: number) {
    this.color[c] = value;
  }
}
