import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Output() SubmitEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.SubmitEmitter.emit(true);
  }

}
