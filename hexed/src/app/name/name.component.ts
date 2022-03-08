import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface Score {
  name: string;
  score: number;
}

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  // send name component to parent
  @Input() scores: Score[] = [];
  @Output() NameEmitter = new EventEmitter<[string, number]>();
  saveInit(init: [string, number]) {
    if (init[0] != '') { // user must enter a name
      let time: number = 60;
      if (init[1] >= 1 && init[1] <= 100) {
        time = init[1];
      }
      this.NameEmitter.emit([init[0], time]);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
