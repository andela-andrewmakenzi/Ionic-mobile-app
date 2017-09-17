import { Component, Input } from '@angular/core';

@Component({
  selector: 'repository',
  templateUrl: 'repository.html'
})
export class RepositoryComponent {

  @Input() repos;

  constructor() {
  }
}
