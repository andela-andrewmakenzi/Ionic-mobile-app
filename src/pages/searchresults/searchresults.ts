import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

  user: Object;
  repos: Object[];

  constructor(
    private navParams: NavParams,
    private githubServiceProvider: GithubServiceProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewWillLoad() {
    // @todo research is this will hog application if slow

    const username = this.navParams.get('username');
    const profileInfo = this.githubServiceProvider.fetchProfileInfo(username);
    const repoInfo = this.githubServiceProvider.getUserRepositories(username);

    Observable.forkJoin([profileInfo, repoInfo]).subscribe(
      result => {
        this.user = result[0];
        this.repos = result[1];
      },
      error => {
        this.toastCtrl.create({
          message: error.json().message,
          duration: 5000,
          showCloseButton: true,
          closeButtonText: 'Dismiss'
        }).present();
      }
    );
  }
}
