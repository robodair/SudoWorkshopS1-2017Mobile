import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsProvider {

  constructor(public http: Http) {
    console.log('Hello PostsProvider Provider');
  }

  getPosts(){
    console.log("getPosts called on PostsProvider");

    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(id){
    console.log("getPost called on PostsProvider");

    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }

}
