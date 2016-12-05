///<reference path="../../../node_modules/@types/google-maps/index.d.ts"/>
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutoCompleteComponent } from "./auto-complete.component";
import { AutoCompleteService } from "./service/auto-complete.service";
import { GoogleMapsLoaderSingleton } from "../entity/google-maps-loader-singelton";

/** AutoCompleteModule
 *  Use setProjectAPI method to include this module
 *  into your project
 */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutoCompleteComponent],
  providers: [AutoCompleteService],
  exports:[AutoCompleteComponent]
})
export class AutoCompleteModule {
  static setProjectAPI(apiKey: string){
    GoogleMapsLoaderSingleton.instance.KEY=apiKey;
    return {
      ngModule : AutoCompleteModule,
      providers: [AutoCompleteService],
    }
  }
}
