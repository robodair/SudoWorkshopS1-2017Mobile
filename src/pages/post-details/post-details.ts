import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsProvider } from '../../providers/posts-provider';

/*
  Generated class for the PostDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html'
})
export class PostDetailsPage {

  post: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private postsProvider: PostsProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }

  ionViewWillEnter() {
    console.log(this.navParams);
    // Call the getPost method which returns an observable, with the post ID, and subscribe to the result
    this.postsProvider.getPost(this.navParams.data.id).subscribe(
      // convert the response to json and assign it to the 'post' class variable
      (response) => {
        this.post = response.json();
      }
    )
  }

}
