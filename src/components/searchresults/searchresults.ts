import { Component } from '@angular/core';

@Component({
  selector: 'searchresults',
  templateUrl: 'searchresults.html'
})
export class SearchresultsComponent {

  text: string;

  constructor() {
    console.log('Hello SearchresultsComponent Component');
    this.text = 'Hello World';
  }

}
