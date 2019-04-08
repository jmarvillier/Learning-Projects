import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Books App';

  constructor(){
    const config = {
      apiKey: "AIzaSyAN3cy6VduzQDOdLeUHxSqsP6jqKuo4xTs",
      authDomain: "books-9692b.firebaseapp.com",
      databaseURL: "https://books-9692b.firebaseio.com",
      projectId: "books-9692b",
      storageBucket: "books-9692b.appspot.com",
      messagingSenderId: "546422582269"
    };
    
    firebase.initializeApp(config);
  }
}