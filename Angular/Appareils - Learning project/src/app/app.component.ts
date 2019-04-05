import { Component, OnInit, OnDestroy } from '@angular/core';
import {} from 'rxjs/Observable';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Learning';
  isAuth = false; 

  seconds:number;
  counterSubscription: Subscription;

  ngOnInit(){
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) =>{
        this.seconds = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured!: '+ error);
      },
      ()=>{
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}