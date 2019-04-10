import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog app';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBV3Cg62S2kIMuD6jyYCE05MVbSFvXyruU",
      authDomain: "blog-angular-dbc04.firebaseapp.com",
      databaseURL: "https://blog-angular-dbc04.firebaseio.com",
      projectId: "blog-angular-dbc04",
      storageBucket: "blog-angular-dbc04.appspot.com",
      messagingSenderId: "677766832401"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
