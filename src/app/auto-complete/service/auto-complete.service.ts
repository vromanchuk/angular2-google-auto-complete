import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
/** Url
 * https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=YOUR_API_KEY
 */

@Injectable()
export class AutoCompleteService {

  constructor(private http: Http) {


  }

}
