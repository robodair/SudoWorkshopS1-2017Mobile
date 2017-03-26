import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsProvider } from '../../providers/posts-provider';

/*
  Generated class for the Posts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private postsProvider: PostsProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
    this.postsProvider.getPosts().subscribe(
      (response) => {
        this.items = response.json();
      }
    );
  }

  itemSelected(item) {
    console.log("We will navigate to item: " + item.id);
  }

}
