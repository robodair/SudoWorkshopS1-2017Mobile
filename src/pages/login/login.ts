import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  items: string[];

  myInput: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initItems();
  }

  initItems() {
    this.items = ["hello", "goodbye", "one", "two"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //this.navCtrl.parent.select(1);
  }

  onInput(event) {
    console.log(event.target.value);

    this.initItems();
    this.items = this.items.filter(
      (item) => {
        let searchString: string = event.target.value.toLowerCase();

        if (item.toLowerCase().indexOf(searchString) > -1){
          return true;
        }
        else {
          return false;
        }
      });
  }

  onCancel(event) {

  }

}
