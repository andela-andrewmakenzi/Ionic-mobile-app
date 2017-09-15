import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  username: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }

  search() {
    if (this.username) {
      this.navCtrl.push('SearchresultsPage', {
        username: this.username
      });
    } else {
      this.toastCtrl.create({
        message: 'Enter github username',
        duration: 2000,
        showCloseButton: true,
        closeButtonText: 'Dismiss'
      }).present();
    }
  }
}
