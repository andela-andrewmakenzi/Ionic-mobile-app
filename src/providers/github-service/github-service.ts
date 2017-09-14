import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/of';

@Injectable()
export class GithubServiceProvider {

  constructor() {
  }

  fetchProfileInfo(username: string): Observable<any> {
    const data = {
      username: 'amackzie',
      bio: 'wanabee coder'
    }
    return Observable.of(data);
  }
}
