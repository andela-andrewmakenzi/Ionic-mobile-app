import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class GithubServiceProvider {

  url: string = "https://api.github.com/users";

  constructor(private http: Http) {
  }

  fetchProfileInfo(username: string): Observable<any> {
    return this.http.get(`${this.url}/${username}`)
      .map((data: Response) => data.json())
      .catch((error: Response) => Observable.throw(error));
  }
}
