import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test.html'
})
export class TestComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
