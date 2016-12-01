import { Injectable } from '@angular/core';
import { APILoader } from "../../entity/apiloader";
/** Url
 * https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=YOUR_API_KEY
 */
@Injectable()
export class AutocompleteService {

  constructor() {
    console.log("AutocompleteService "+APILoader.apiKey);
  }

}
