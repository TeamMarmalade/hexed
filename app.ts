// https://www.typescriptlang.org/docs/handbook/2/objects.html

interface initialize {
  name: string;
  time?: number;
}

abstract class abstract_game { // abstract class
  abstract target_color: [number, number, number];
  abstract input_color: [number, number, number];
  abstract name: string;
  abstract time: number;

  abstract generateColor(): void;
  abstract generateColor(color: [number, number, number]): void; // overloading

  abstract slider(value: number, color_type: number): void;

  abstract calculate_score(seconds_remaining: number): number;
}

class game extends abstract_game { // normal class
  public target_color: [number, number, number];
  public input_color: [number, number, number];
  public name: string;
  public time: number;

  constructor(init: initialize) { // interface
    super();
    if(init.time) {
      if(init.time < 1 || init.time > 100) this.time = 60;
      else this.time = init.time;
    }
    else this.time = 60;

    this.name = init.name;
  }

  // constructor(init: initialize, initial_color: [number, number, number]) { // interface
  //   super();
  //   if(init.time) this.time = init.time;
  //   else this.time = 60;

  //   this.name = init.name;
  // }

  generateColor(color?: [number, number, number]): void {
    if(color) {
      this.target_color = color;
      return;
    }
    this.target_color[0] = Math.floor(Math.random() * 255);
    this.target_color[1] = Math.floor(Math.random() * 255);
    this.target_color[2] = Math.floor(Math.random() * 255);
  }

  slider(value: number, color_type: number): void {
    this.input_color[color_type] = value;
  }

  calculate_score(seconds_remaining: number): number {
    let actual_red = this.target_color[0];
    let guessed_red = this.input_color[0];
    let actual_green = this.target_color[1];
    let guessed_green = this.input_color[1];
    let actual_blue = this.target_color[2];
    let guessed_blue = this.target_color[2];

    return (255 - Math.abs(actual_red - guessed_red)) + (255 - Math.abs(actual_green - guessed_green))
      + (255 - Math.abs(actual_blue - guessed_blue)) * Math.floor(seconds_remaining) * (1000 * (101 - this.time));
  }
}