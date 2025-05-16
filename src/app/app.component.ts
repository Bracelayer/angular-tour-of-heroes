import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, HeroesComponent, MessagesComponent]
})
export class AppComponent {
  title = 'Tour Of Heroes';

  constructor( private location: Location) { }


  goBack(): void {
    this.location.back();
  }
}
