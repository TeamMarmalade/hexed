import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  styles: [
    `
    #color {
      background-color: rgb(var(--r), var(--g), var(--b));
    }
    `
  ]
})
export class DisplayComponent implements OnInit {
  @Input() color: [number, number, number] = [0,0,0];
  constructor() { }

  ngOnInit(): void {
  }

}
