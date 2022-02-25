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
  time: number = 60;
  gameStart: boolean = false;
  name: string = '';

  changeValue(c: number, value: number) { // slider component
    this.color[c] = value;
  }
  saveInit(Init: [string, number]) { // name component
    this.time = Init[1];
    this.name = Init[0];
    this.gameStart = true;
  }
}
