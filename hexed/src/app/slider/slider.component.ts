import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() gameStatus = false;
  @Input() curr_value = 0;
  //send slider component to parent
  @Output() ValueEmitter = new EventEmitter<number>();
  changeValue(e: any) {
    this.ValueEmitter.emit(+e.target.value); // parse to number
  }

  constructor() { }

  ngOnInit(): void {
  }

}
