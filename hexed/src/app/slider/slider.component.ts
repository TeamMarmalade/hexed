import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  //send slider component to parent
  @Output() ValueEmitter = new EventEmitter<number>();
  changeValue(value: string) {
    this.ValueEmitter.emit(+value); // parse to number
  }

  constructor() { }

  ngOnInit(): void {
  }

}
