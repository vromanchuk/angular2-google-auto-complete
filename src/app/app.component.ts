import { Component } from '@angular/core';
import { AutocompleteService } from "./auto-complete/service/autocomplete.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(autoCompleate: AutocompleteService){

  }
}
