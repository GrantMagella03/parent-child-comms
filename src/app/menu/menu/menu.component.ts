import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   menus = [
    {
      display: "Home",
      route: "maxtrain.com",
      color: "red"
    }, 
    {
      display: "Music",
      route: "spotify.com",
      color: "green"
    },
    {
      display: "About",
      route: "google.com",
      color: "blue"
    },
    {
      display: "Help",
      route: "amazon.com",
      color: "white"
    }
  ];
}
