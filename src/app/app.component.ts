import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is my main app components';
  constructor(){
    // setTimeout(() => {
    //   this.title = "change title after 5 sec";
    // }, 5000);
  }
}
