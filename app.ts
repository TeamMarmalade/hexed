// https://www.typescriptlang.org/docs/handbook/2/objects.html

interface initialize {
  name: string;
  time?: number;
}

abstract class abstract_game { // abstract class
  abstract target_color: [number, number, number];
  abstract input_color: [number, number, number];
  public name: string;
  public time: number;

  constructor(init: initialize) { // interface
    if(init.time) this.time = init.time;
    else this.time = 60;

    this.name = init.name;
  }

  abstract generateColor(): void;
  abstract generateColor(color: [number, number, number]): void; // overloading

  abstract slider(value: number, color_type: number): void;
}

class game extends abstract_game { // normal class
  

  // constructor(init: initialize, initial_color: [number, number, number]) { // interface
  //   super();
  //   if(init.time) this.time = init.time;
  //   else this.time = 60;

  //   this.name = init.name;
  // }

  generateColor(): void {
    this.target_color[0] = Math.floor(Math.random() * 255);
    this.target_color[1] = Math.floor(Math.random() * 255);
    this.target_color[2] = Math.floor(Math.random() * 255);
  }

  generateColor(color: [number, number, number]): void {
    this.target_color = color;
  }

  slider(value: number, color_type: number): void {
    this.input_color[color_type] = value;
  }
}

function calculate_score(){
//(255 - abs(actual_red - guessed_red)) + 
//(255 - abs(actual_green - guessed_green)) + 
//(255 - abs(actual_blue - gussed_blue)) * floor(seconds_remaining) * 
//(1000 * (101 - seconds_selected))



}