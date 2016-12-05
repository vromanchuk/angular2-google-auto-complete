
import * as GoogleMapsLoader from "google-maps";
// import GoogleMapsLoader from "google-maps";
// import GoogleMapsLoader from 'google-maps';
export class GoogleMapsLoaderSingleton {

  private static _instance = GoogleMapsLoader;
  private constructor(){
  }

  static get instance(){
    return this._instance;
  }

}
