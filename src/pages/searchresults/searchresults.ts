import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

  user: Object;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private githubServiceProvider: GithubServiceProvider
  ) {
  }

  ionViewWillLoad() {
    // @todo research is this will hog application if slow
    this.githubServiceProvider.fetchProfileInfo(this.navParams.get('username')).subscribe(
      result => {
        this.user = result;
      },
      error => {
        console.log('there was an error');
      }
    );
  }
}
