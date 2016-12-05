import { Component, OnInit } from "@angular/core";
import { GoogleMapsLoaderSingleton } from "../entity/google-maps-loader-singelton";
import Autocomplete = google.maps.places.Autocomplete;

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  // autoCompleteObj: Autocomplete;
  inputField: HTMLInputElement;

  constructor() {
    // this.inputField = new HTMLInputElement();
    GoogleMapsLoaderSingleton.instance.load(this.autoCompleteGenerate);
  }

  ngOnInit() {

  }

  public autoCompleteGenerate(){
    // this.autoCompleteObj = new Autocomplete(this.inputField);
    // console.log(google);
    console.log('hello')
  }

}
