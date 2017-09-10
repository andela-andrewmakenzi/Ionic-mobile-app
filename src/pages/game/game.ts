import { Component } from '@angular/core';

import {
  IonicPage, NavController, NavParams,
  ActionSheetController, ActionSheet,
  AlertController, Alert
} from 'ionic-angular';

import { TornamentsPage } from '../tornaments/tornaments';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private basicAlertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {

  }

  navigate() {
    this.navCtrl.push(TornamentsPage); // push page to navigation stack
  }

  openActionSheet() {
    let actionSheet: ActionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive'
        }, {
          text: 'Archive',
        }, {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    actionSheet.present();
  }

  openBasicAlert() {
    let alert: Alert = this.basicAlertCtrl.create({
      title: 'Login',
      subTitle: 'enter login info',
      buttons: ['OK']
    });

    alert.present();
  }
}
