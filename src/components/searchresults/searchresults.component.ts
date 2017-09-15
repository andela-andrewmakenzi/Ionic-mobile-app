import { Component, Input } from '@angular/core';

@Component({
  selector: 'searchresults',
  templateUrl: 'searchresults.component.html'
})
export class SearchresultsComponent {

  @Input() user: any;
}
