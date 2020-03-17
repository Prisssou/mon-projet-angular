import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

seconds: number;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

}
