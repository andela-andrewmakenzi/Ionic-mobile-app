import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private githubServiceProvider: GithubServiceProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewWillLoad() {
    // @todo research is this will hog application if slow

    const username = this.navParams.get('username');
    this.githubServiceProvider.fetchProfileInfo(username).subscribe(
      result => {
        this.user = result;
        console.log(result);
      },
      error => {
        this.toastCtrl.create({
          message: error,
          duration: 2000,
          showCloseButton: true,
          closeButtonText: 'Dismiss'
        }).present();
      }
    );
  }
}
