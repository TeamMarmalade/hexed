import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Output() ColorEmitter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    
  }

  generateColor(): void {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    this.ColorEmitter.emit([r, g, b]);
  }
}
